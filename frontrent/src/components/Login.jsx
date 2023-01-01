import React from 'react'
import { useState } from 'react'
import axios from "axios"
function Login() {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handlelogin=(e)=>{
        e.preventDefault();
        const loginobj={
            email:email,
            password:password
        }
        

        axios.post("http://localhost:3000/api/user/login",loginobj)
        .then((res)=>localStorage.setItem("token",res.data.accessToken))
        .catch((err)=>console.log(err))

    }
  return (
    <form onSubmit={handlelogin}>
    <input type="email" 
         value={email}
         onChange={(e)=>{setemail(e.target.value)}} />
        <p>password</p>
        <input type="password" 
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}}/>
        <button type='submit'>login</button>
    </form>
  )
}

export default Login