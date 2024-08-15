import { Children, useEffect, useState } from "react";
import AuthContext from "./authContext";
import axios from "axios";

const AuthState=({children})=>{
    const [auth,setAuth]=useState(JSON.parse(localStorage.getItem("user") || null));
    const login=async (data)=>{
        const response=await axios.post("http://localhost:8800/api/auth/login",data)
        setAuth(response.data);
    }
    const logout=async()=>{
        const response=await axios.post("http://localhost:8800/api/auth/logout")
        setAuth(null);
    }
    useEffect(
        () => {
            localStorage.setItem("user", JSON.stringify(auth))
        }
    ,[auth]);

    return <AuthContext.Provider value={{login, logout, auth}}>{children}</AuthContext.Provider>

}
export default AuthState;