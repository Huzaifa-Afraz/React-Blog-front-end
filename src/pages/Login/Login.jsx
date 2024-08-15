import React, { useContext, useState } from "react";
import Button from "../../components/Button/Button.jsx";
import "../common.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext.js";
export default function Login() {
  const { auth, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(data);

      setSuccess("log in successfully");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 3000);
    } catch (error) {
      // console.log(error);
      setError(error.response.data || "error occured lgin");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    // console.log(e.target.value)
  };
  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h1 className="mx-auto">Login</h1>
        <input
          type="email"
          className="auth__Inputs"
          name="email"
          placeholder="johndeo@gmail.com"
          onChange={handleChange}
        />
        <input
          type="password"
          className="auth__Inputs"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button btnClass="login__btn" name="Log in" />
        <Button
          btnClass="forget__btn text-only-btn float-center lef-50"
          name="Forget password"
        />
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        {/* <Link className="text-only-btn" to="#">Create New Account</Link> */}
        <hr />
        {/* <Button btnClass="create__acc" name="Create New Account" /> */}
        <Link className="create__acc" to="/register">
          Create New Account
        </Link>
      </form>
    </div>
  );
}
