import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import './Home.css'
import { Link, useLocation} from 'react-router-dom';
import axios from 'axios';
export default function Home() {
  const [posts, setPosts]=useState([])
  const cat=useLocation().search;

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        
        const response=await axios.get(`http://localhost:8800/api/posts${cat}`)
        setPosts(response.data)
      } catch (error) {
        console.log(error)
      }
      }
    fetchData();
  },[cat])
  //  const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];
  return (
    <div>
        <Container>
          
          <div className="posts">
            {posts.map((post)=>{
           
              return(
              
                  <div className="post" key={post.id}>
                    <div className="img">
                      <img src={`/upload/${post.img}`} alt={post.title} />
                    </div>
                    <div className="content">
                      <Link to={`post/${post.id}`}>
                       <h2 className='h2 text-dark'> {post.title}</h2>
                      </Link>
                      <p>{post.desc}</p>
                      <Link className='btn btn-outline-primary' to={`post/${post.id}`}>Read more</Link>
                    </div>


                  </div>
              )
            })}
          </div>
            {/* <div className="right">hel</div> */}
        </Container>
        
      
    </div>
  )
}
