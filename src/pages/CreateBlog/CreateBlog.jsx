import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CreateBlog.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment';
export default function CreateBlog() {
  const navigate=useNavigate();
  const state = useLocation().state;
  // const [value, setValue] = useState('');
  // const [data, setdata]=useState({titlle:'',desc:'',cat:'',file:null})
  const [title, setTitle] = useState(state?.title || '')
  const [desc, setDesc] = useState(state?.desc || '')
  const [file, setFile] = useState(state?.img || null)
  const [cat, setCat] = useState(state?.cat || '')
console.log(file?file:'file not found')
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post('http://localhost:8800/api/uploads', formData)
      return res.data;

    } catch (error) {
      console.log(error)
    }
  }
  // console.log(state)
  const handleClick = async e => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      console.log(state)
      const res=state ? axios.put(`http://localhost:8800/api/posts/${state.postid}`, { title, desc, cat, img: file ? imgUrl : '', date:moment(Date.now()).format("YY-MM-DD HH:mm:ss")}, {withCredentials:true}) : axios.post(`http://localhost:8800/api/posts/`, { title, desc, cat, img: file ? imgUrl : '',date:moment(Date.now()).format("YY-MM-DD HH:mm:ss") }, {withCredentials:true})
      console.log({res})
      navigate('/')
    } catch (error) {

    }
  }
  return (
    <div className='my-4'>
      <Container>
        <h1>Create New Blog</h1>
        <Row>

          <Col sm={8}>
            <input type="text" value={title} placeholder='Enter titile' onChange={e => setTitle(e.target.value)} className='w-100 mb-3 Title-input' />
            <div className="editorContainer">
              <ReactQuill className='Editor' theme="snow" value={desc} onChange={setDesc} />
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus libero, necessitatibus maxime quaerat repudiandae veritatis recusandae voluptatem rem praesentium ut esse architecto. Reprehenderit, corporis maiores unde consectetur repellat eveniet.</p> */}
          </Col>

          <Col sm={3}>

            <aside>
              <div className="blog-data">
                <span><b>Status: </b>Draft</span>
                <span><b>Visibality: </b>Public</span>
                <input type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} id="upload-img" />
                <label htmlFor="upload-img" className='upload-img' >Upload an image</label>
                <div className="buttons">
                  <button className='draft-btn'>Save as draft</button>
                  <button className='update-btn' onClick={handleClick}>Update</button>
                </div>

              </div>
              <div className="cat-labels mt-3">
                <h2>Category</h2>


                <div className="cat">
                  <input type="radio" name="art" value="art" id="Art" checked={cat === "art"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="Art">Art</label>
                </div>


                <div className="cat">
                  <input type="radio" name="science" value="science" id="Science" checked={cat === "science"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="Science">Science</label>
                </div>


                <div className="cat">
                  <input type="radio" name="technology" value="technology" id="technology" checked={cat === "technology"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="technology">Technology</label>
                </div>

                <div className="cat">
                  <input type="radio" name="entertainment" value="entertaiment" id="Entertaiment" checked={cat === "entertainment"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="Entertaiment">Entertaiment</label>
                </div>

                <div className="cat">
                  <input type="radio" name="design" value="design" id="design" checked={cat === "design"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="design">Design</label>
                </div>


                <div className="cat">
                  <input type="radio" name="sports" value="sports" id="sports" checked={cat === "sports"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="sports">Sports</label>
                </div>

                <div className="cat">
                  <input type="radio" name="food" value="food" id="food" checked={cat === "food"} onChange={e => setCat(e.target.value)} />
                  <label htmlFor="food">Food</label>
                </div>


              </div>
            </aside>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
