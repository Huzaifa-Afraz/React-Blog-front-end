import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./detailBlog.css";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import moment from "moment"
import AuthContext  from '../../context/AuthContext';
import { Alert } from "react-bootstrap";
// import Edit from './img/edit.svg'
// import {Delete} from './img/trash-can.svg'

export default function DetailBlog() {
  const [err,setErr]=useState("")
  const {user}=useContext(AuthContext)
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
      console.log(error)
      // console.log(error.response.data)
    }
    }
  fetchData();
},[id])
const handledelete=()=>{
  // const 
}
// console.log({post}+"new here")
  return (
    <Container>
      <div className="ReadPost">
        <div className="main">
          {err && <Alert variant="danger">{err}</Alert>}
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
                alt=""
              />}
              <div className="info">
                <span>{post.name}</span>
                <p>posted {moment(post.date).fromNow()}</p>
              </div>
            </div>
            {user?.name === post.name && <div className="icon-can align-items-center d-flex gap-4">
              <Link to="/write?edit=1">
                <img className="icon" src="../img/edit.svg" alt="" />
              </Link>
              <img onClick={handledelete} className="icon" src="../img/trash-can.svg" alt=" delete buton" />
              </div>}
            </div>
          <div className="content my-4">
            <h1>{post.title}</h1>
           {post.desc}
          </div>
        </div>
        <div className="sidebar mb-4"><Menu/></div>
      </div>
    </Container>
  );
}
