import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./detailBlog.css";
import Menu from "../../components/Menu/Menu";
// import Edit from './img/edit.svg'
// import {Delete} from './img/trash-can.svg'
export default function DetailBlog() {
  return (
    <Container>
      <div className="ReadPost">
        <div className="main">
          <img
            className="main-img"
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="user">
            <div className="d-flex gap-3">
              <img
                className="userimg"
                src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className="info">
                <span>huzaifa afraz</span>
                <p>posted 2 days ago</p>
              </div>
            </div>
            <div className="icon-can align-items-center d-flex gap-4">
              <Link to="/write?edit=1">
                <img className="icon" src="../img/edit.svg" alt="" />
              </Link>
              <img className="icon" src="../img/trash-can.svg" alt="" />
            </div>
          </div>
          <div className="content my-4">
            <h1>How to use React Router</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, laudantium itaque quaerat nam necessitatibus excepturi quae aperiam sint consequatur consectetur, inventore, praesentium pariatur ea eaque? Voluptates, consequuntur molestiae aliquid rem nisi quae aspernatur, praesentium accusamus a nesciunt quaerat rerum officiis ex? Optio, quae corporis velit ipsam laudantium beatae atque, amet, natus voluptatem nemo eius fuga reiciendis molestias! Ad dolor explicabo numquam, dolore possimus, eligendi eos error pariatur rerum dignissimos sed nemo eum nihil! Repellat ullam, consectetur veniam rerum quam, perferendis non sunt corrupti dolore, laborum quod ratione distinctio fugiat dolor! Iusto unde libero placeat quis nam officiis illo sapiente repudiandae.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, laudantium itaque quaerat nam necessitatibus excepturi quae aperiam sint consequatur consectetur, inventore, praesentium pariatur ea eaque? Voluptates, consequuntur molestiae aliquid rem nisi quae aspernatur, praesentium accusamus a nesciunt quaerat rerum officiis ex? Optio, quae corporis velit ipsam laudantium beatae atque, amet, natus voluptatem nemo eius fuga reiciendis molestias! Ad dolor explicabo numquam, dolore possimus, eligendi eos error pariatur rerum dignissimos sed nemo eum nihil! Repellat ullam, consectetur veniam rerum quam, perferendis non sunt corrupti dolore, laborum quod ratione distinctio fugiat dolor! Iusto unde libero placeat quis nam officiis illo sapiente repudiandae.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, laudantium itaque quaerat nam necessitatibus excepturi quae aperiam sint consequatur consectetur, inventore, praesentium pariatur ea eaque? Voluptates, consequuntur molestiae aliquid rem nisi quae aspernatur, praesentium accusamus a nesciunt quaerat rerum officiis ex? Optio, quae corporis velit ipsam laudantium beatae atque, amet, natus voluptatem nemo eius fuga reiciendis molestias! Ad dolor explicabo numquam, dolore possimus, eligendi eos error pariatur rerum dignissimos sed nemo eum nihil! Repellat ullam, consectetur veniam rerum quam, perferendis non sunt corrupti dolore, laborum quod ratione distinctio fugiat dolor! Iusto unde libero placeat quis nam officiis illo sapiente repudiandae.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, laudantium itaque quaerat nam necessitatibus excepturi quae aperiam sint consequatur consectetur, inventore, praesentium pariatur ea eaque? Voluptates, consequuntur molestiae aliquid rem nisi quae aspernatur, praesentium accusamus a nesciunt quaerat rerum officiis ex? Optio, quae corporis velit ipsam laudantium beatae atque, amet, natus voluptatem nemo eius fuga reiciendis molestias! Ad dolor explicabo numquam, dolore possimus, eligendi eos error pariatur rerum dignissimos sed nemo eum nihil! Repellat ullam, consectetur veniam rerum quam, perferendis non sunt corrupti dolore, laborum quod ratione distinctio fugiat dolor! Iusto unde libero placeat quis nam officiis illo sapiente repudiandae.

            </p>
          </div>
        </div>
        <div className="sidebar"><Menu/></div>
      </div>
    </Container>
  );
}
