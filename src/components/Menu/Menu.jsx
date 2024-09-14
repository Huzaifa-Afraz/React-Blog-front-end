import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./menu.css"
import axios from 'axios';
export default function Menu({cat,postid}) {
    // const posts = [
    //     {
    //       id: 1,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 2,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 3,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 4,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //   ];
    const [posts, setPost]=useState([])
    const [err, setErr]=useState('')

    useEffect(()=>{
      const fetchData=async()=>{
        try {
          
          const response=await axios.get(`http://localhost:8800/api/posts?cat=${cat}`)
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
      // console.log({posts})
    },[cat])

    return (
    <div className='menu'>
        <h2>Other psots you may like</h2>
      {posts.map(post=>{
        return postid !== post.id ?(
        <div className="post d-flex gap-1 flex-column" key={post.id}>
            <img src={post.img} alt="" />
            <Link><h2>{post.title}</h2></Link>
            {/* <p>{post.desc}</p> */}
            <Link className='btn btn-outline-primary' to={`/post/${post.id}`}>Read more</Link>
        </div>
      ):null})}
    </div>
  )
}
