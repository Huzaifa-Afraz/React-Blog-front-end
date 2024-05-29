import React from "react";
// import Auth from '../../components/Auth/Auth'
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import "../common.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="auth">
      <form className="auth__form" action="">
        <h1 className="mx-auto">Login</h1>
        <Input
          type="email"
          placeholder="Email address"
          className="auth__Inputs"
        />
        <Input
          type="Password"
          placeholder="Password"
          className="auth__Inputs"
        />
        <Button btnClass="login__btn" name="Log in" />
        <Button btnClass="forget__btn text-only-btn float-center lef-50" name="Forget password" />
        {/* <Link className="text-only-btn" to="#">Create New Account</Link> */}
        <hr />
        {/* <Button btnClass="create__acc" name="Create New Account" /> */}
        <Link className="create__acc" to="/register">Create New Account</Link>
      </form>
    </div>
  );
}
