import React, { useState } from 'react'
import { Paper } from '@mui/material';

const Loginpage = () => {

    const[username,setUser]=useState('');
    const[password,setPassword]=useState('');
    const log = (event) => {
      event.preventDefault();
      setUser(username);
      setPassword(password);

    }
const onlog=()=>{
  console.log(username);
  console.log(password);
}
  
  return (
    <div backgroundColor='#424242'>
      <h1>Login</h1>
      <form>
        <label>
          UserName 
          <input type='text' value={username} onChange={log} />
        </label>
        <br/>
        <label>
          Password  
          <input type='text' value={password} onChange={log} />
        </label>
        <button onChange={onlog}>Log In </button>
      </form>
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </div>
  )
}

export default Loginpage