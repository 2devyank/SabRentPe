import React from 'react'

function Register() {
    const handlesubmit=()=>{
        
    }
  return (
    
    <form onSubmit={handlesubmit}>
        <p>name</p>
        <input type="text" />
        <p>email</p>
        <input type="email" />
        <p>password</p>
        <input type="password" />
        <button type='submit'>register</button>
    </form>
  )
}

export default Register