import React, { useState } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import "../common.css";
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Register() {
  const [inputs, setinput]=useState({
name:'',
email:'',
password:'',
confirm_password:''

  })
  const [errors, seterror]=useState('')


const handlechage=(e)=>{
  const {name, value}=e.target;
  setinput((prev)=>({...prev,[name]:value}));
}

const validatepassword=()=>{
  if(inputs.password!==inputs.confirm_password){
    seterror('passwords do not match')
    return false;
}
seterror('');
return true;
}

const handlesubmit=async (e)=>{
  e.preventDefault();
  if(validatepassword()){
    console.log(inputs);
    try{

      const res=await axios.put("http://localhost:8800/api/auth/register",inputs);
      console.log(res)
    }catch(err){
      seterror(err)
    }
  }
  
}
  return ( 
    <div className="auth">
      <form className="auth__form" action="" onSubmit={handlesubmit}>
        <h1 className="mx-auto">Signup</h1>
        
        <input name="name" type="text" placeholder="hohn deo" className="auth__Inputs" onChange={handlechage} required/>
        <input name="email" type="email" placeholder="example@gmail.com" className="auth__Inputs" onChange={handlechage} required/>
        <input name="password" type="password" placeholder="Password" className="auth__Inputs" onChange={handlechage} required/>
        <input name="confirm_password" type="password" placeholder="Confirm Password" className="auth__Inputs" onChange={handlechage} required/>

        <Button btnClass="login__btn" name="register" />
        <span className="text-center text-danger">{errors?errors:''}</span>
        <hr />

        <span className="mx-auto">Alredy have an account? <Link className="text-only-btn" to="/login">Login</Link></span>
      </form>
    </div>
  );
}
