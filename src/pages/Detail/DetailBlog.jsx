import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation} from "react-router-dom";
import "./detailBlog.css";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import moment from "moment"
import AuthContext  from '../../context/AuthContext';
import { Alert } from "react-bootstrap";
import AlertModal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
// import Edit from './img/edit.svg'
// import {Delete} from './img/trash-can.svg'

export default function DetailBlog() {

  const Ref=useRef(null)
  const [err,setErr]=useState("")
  const [success, setSuccess]=useState('');
  const {user}=useContext(AuthContext)
  const navigate=useNavigate();
  // console.log("user is "+ user.name)
  const [post, setPost]=useState({})
const id=useLocation().pathname.split("/")[2];
// console.log(id)
useEffect(()=>{
  const fetchData=async()=>{
    try {
      
      const response=await axios.get(`http://localhost:8800/api/posts/${id}`)
      // console.log(`respnse is ${response.data}`)
      setPost(response.data)
// setErr(response.data)
    } catch (error) {
      setErr(error.response.data)
      // console.log(error)
      // console.log(error.response.data)
    }
    }
  fetchData();
},[id])

const CheckAccess=()=>{
  const result=Ref.current;
  // console.log(result)
  return result;
}



const handledelete=async()=>{
  Ref.current.click();
  try {
    if(CheckAccess){
      const response= axios.delete(`http://localhost:8800/api/posts/${id}`)
      setSuccess(CheckAccess)
      console.log(CheckAccess(Ref.current))
      
setTimeout(()=>{
  setSuccess("")
  navigate("/")
},2000)
    }
  } catch (error) {
    setErr(error.response.data)
    
  }
  // const 
}
// console.log(post)
// console.log({post}+"new here")
  return (
    <Container>
     {Ref && <AlertModal title="huzaifa blog says" body="Are you sure you want to proceed?" Ref={Ref} click={CheckAccess}></AlertModal>}
      <div className="ReadPost">
        <div className="main">
          {err && <Alert variant="danger">{err}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          {/* <Alert variant="success">hello world</Alert> */}
          <img
            className="main-img"
            src={post?.img}
            alt={post.title}
          />
          <div className="user">
            <div className="d-flex gap-3">
             {post.userimg &&  <img
                className="userimg"
                src={post?.userimg}
                alt={user?.name}
              />}
              <div className="info">
                <span>{post.name}</span>
                <p>posted {moment(post.date).fromNow()}</p>
              </div>
            </div>
            {user?.name === post.name && <div className="icon-can align-items-center d-flex gap-4">
              <Link to={`/create?edit=${post.postid}`} state={post}>
                <img className="icon" src="/img/edit.svg" alt="" />
              </Link>
              <img onClick={handledelete} className="icon" src="/img/trash-can.svg" alt=" delete buton" />
              </div>}
            </div>
          <div className="content my-4">
            <h1>{post.title}</h1>
           {post.desc}
          </div>
        </div>
        <div className="sidebar mb-4">
          <Menu cat={post.cat} postid={post.postid}/>
          </div>
      </div>
    </Container>
  );
}
