import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { reset } from 'cli-color';

function Register() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const token=localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
    const fetchnotes=async()=>{
      const data=await axios.get("http://localhost:3000/api/rent")
      .then((res)=>console.log(res.data))
      // console.log("data"+data);
    }
    const navigate=useNavigate();
    useEffect(()=>{
fetchnotes();
    },[])
    const handlesubmit=(e)=>{
      e.preventDefault();
      const regobj={
        name:name,
        email:email,
        password:password

      }
      axios.post("http://localhost:3000/api/user/register",regobj)
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(err))

      navigate("/login")

      setname("")
      setemail("")
      setpassword("")
    }
  return (
    
    <form onSubmit={handlesubmit}>
        <p>name</p>
        <input type="text"
        value={name}
        onChange={(e)=>{setname(e.target.value)}}
        />
        <p>email</p>
        <input type="email" 
         value={email}
         onChange={(e)=>{setemail(e.target.value)}} />
        <p>password</p>
        <input type="password" 
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}}/>
        <button type='submit'>register</button>
    </form>
  )
}

export default Register