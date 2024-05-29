import React from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import "../common.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="auth">
      <form className="auth__form" action="">
        <h1 className="mx-auto">Signup</h1>
        <Input
          name="Name"
          type="Text"
          placeholder="john deo"
          className="auth__Inputs"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          className="auth__Inputs"
        />
        <Input
          name="password"
          type="Password"
          placeholder="Password"
          className="auth__Inputs"
        />
        <Input
          name="confirm-password"
          type="Password"
          placeholder="Confirm Password"
          className="auth__Inputs"
        />
        <Button btnClass="login__btn" name="Log in" />
        <hr />

        <span className="mx-auto">Alredy have an account? <Link className="text-only-btn" to="/login">Login</Link></span>
      </form>
    </div>
  );
}
