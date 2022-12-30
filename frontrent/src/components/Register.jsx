import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
// import { reset } from 'cli-color';

function Register() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const fetchnotes=async()=>{
      const data=await axios.get("http://localhost:3000/api/rent")
      .then((res)=>console.log(res.data))
      // console.log("data"+data);
    }
    useEffect(()=>{
fetchnotes();
    },[])
    const handlesubmit=()=>{

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