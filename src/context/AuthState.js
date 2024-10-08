import {useEffect, useState } from "react";
import AuthContext  from './AuthContext.js';
import axios from "axios";

const AuthState=({children})=>{
    const [logoutalert, setLogout]=useState('');
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user") || null));
    const login=async (data)=>{
        const response=await axios.post("http://localhost:8800/api/auth/login",data,{withCredentials:true})
        setUser(response.data);
        // console.log(response)
    }
    const logout=async()=>{
        const response=await axios.post("http://localhost:8800/api/auth/logout")
setLogout(response.data)
        setUser(null);
        setTimeout(()=>{
            setLogout('')
        },3000)
    }
    useEffect(
        () => {
            localStorage.setItem("user", JSON.stringify(user))
            
        }
    ,[user]);

    return <AuthContext.Provider value={{login, logout, user, logoutalert}}>{children}</AuthContext.Provider>

}
export default AuthState;