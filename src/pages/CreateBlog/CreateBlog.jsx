import React ,{useState}from 'react'
import { Container } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CreateBlog.css'
export default function CreateBlog() {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className='my-4'>
      <Container>
        <h1>Create New Blog</h1>
        <Row>
        
        <Col sm={8}>
        <input type="text" placeholder='Enter titile' className='w-100 mb-3 Title-input'/>
        <div className="editorContainer">
        <ReactQuill className='Editor' theme="snow" value={value} onChange={setValue} />
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus libero, necessitatibus maxime quaerat repudiandae veritatis recusandae voluptatem rem praesentium ut esse architecto. Reprehenderit, corporis maiores unde consectetur repellat eveniet.</p> */}
        </Col>

        <Col sm={3}>

        <aside>
          <div className="blog-data">
            <span><b>Status: </b>Draft</span>
            <span><b>Visibality: </b>Public</span>
            <input type="file" style={{display:"none"}} id="upload-img" />
            <label htmlFor="upload-img" className='upload-img'>Upload an image</label>
            <div className="buttons">
              <button className='draft-btn'>Save as draft</button>
              <button className='update-btn'>Update</button>
            </div>

          </div>
           <div className="cat-labels">
            <h2>Category</h2>
            
           </div>
          
          </aside>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}
