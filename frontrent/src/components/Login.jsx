import React from 'react'
import { useState } from 'react'

function Login() {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
  return (
    <form>
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

export default Login