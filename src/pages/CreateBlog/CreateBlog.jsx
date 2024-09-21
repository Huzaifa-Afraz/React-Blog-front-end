import React, { useState } from 'react';
import { Alert, Container } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CreateBlog.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function CreateBlog() {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [err,setErr]=useState("")
  const [success, setSuccess]=useState('');

  // Initialize form states
  const [title, setTitle] = useState(state?.title || '');
  const [desc, setDesc] = useState(state?.desc || '');
  const [file, setFile] = useState(null); // Will be updated if user uploads a new image
  const [cat, setCat] = useState(state?.cat || '');

  const upload = async () => {
    if (!file) return state?.img; // If no new image is uploaded, use the existing image
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post('http://localhost:8800/api/uploads', formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async e => {
    e.preventDefault();
    const imgUrl = await upload(); // If no new image, the existing image URL will be used
    try {
      const requestBody = { 
        title, 
        desc, 
        cat, 
        img: imgUrl, 
        date: moment(Date.now()).format("YY-MM-DD HH:mm:ss") 
      };
      
      // if (state) {
      //   // Update existing post
      //   const res=await axios.put(`http://localhost:8800/api/posts/${state.postid}`, requestBody, { withCredentials: true });
      // } else {
      //   // Create new post
      //   const res=await axios.post(`http://localhost:8800/api/posts/`, requestBody, { withCredentials: true });
      // }
      const res=state?await axios.put(`http://localhost:8800/api/posts/${state.postid}`, requestBody, { withCredentials: true }):await axios.post(`http://localhost:8800/api/posts/`, requestBody, { withCredentials: true });
      if(res.status===200){
      setSuccess(res?.data || "created succesfully ");}
      else{
        setErr(res?.data || "error occured");
      }
      setTimeout(()=>{
        setSuccess('');
        setErr('');

        navigate('/');
      },3000)
    } catch (error) {
      setErr(error.message)
    }
  };

  return (
    <div className='my-4'>
      <Container>
      {err && <Alert variant="danger">{err}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
        <h1>{state ? 'Update Blog' : 'Create New Blog'}</h1>
        <Row>
          <Col sm={8}>
            <input 
              type="text" 
              value={title} 
              placeholder='Enter title' 
              onChange={e => setTitle(e.target.value)} 
              className='w-100 mb-3 Title-input' 
            />
            <div className="editorContainer">
              <ReactQuill className='Editor' theme="snow" value={desc} onChange={setDesc} />
            </div>
          </Col>

          <Col sm={3}>
            <aside>
              <div className="blog-data">
                <span><b>Status: </b>Draft</span>
                <span><b>Visibility: </b>Public</span>
                <input 
                  type="file" 
                  style={{ display: "none" }} 
                  onChange={e => setFile(e.target.files[0])} 
                  id="upload-img" 
                />
                <label htmlFor="upload-img" className='upload-img'>Upload an image</label>
                <div className="buttons">
                  <button className='draft-btn'>Save as draft</button>
                  <button className='update-btn' onClick={handleClick}>{state ? 'Update' : 'Create'}</button>
                </div>
              </div>
              
              <div className="cat-labels mt-3">
                <h2>Category</h2>

                {['art', 'science', 'technology', 'entertainment', 'design', 'sports', 'food'].map(category => (
                  <div className="cat" key={category}>
                    <input 
                      type="radio" 
                      name={category} 
                      value={category} 
                      id={category} 
                      checked={cat === category} 
                      onChange={e => setCat(e.target.value)} 
                    />
                    <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                  </div>
                ))}
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
