import { Grid, Paper,Avatar, TextField, Button, Typography,Link} from '@mui/material'
import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
const LoginMui = () => {

    const pa={padding:"30px" ,height:"60vh",width:"45vh",margin:"10vh auto"}
    const av={backgroundColor:"#b27764"}
    const te={margin:'10px 0'}
    const btn={margin:'8px 0'}
    
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
    <div>
        <Grid >
            <Paper elevation={10} style={pa}>
                <Grid align='center'>
                <Avatar style={av}><LockIcon/></Avatar>
                <h2>Login</h2>
                </Grid>
                <form style={te}>
                <TextField label="Username" placeholder='Enter Username' onChange={log} required></TextField>
                <p fullwidth></p>
                <p fullwidth></p>
                <TextField label="Password" placeholder='Enter Password' type="password"  onChange={log} required></TextField>
                <p fullwidth></p>
                <Button type='submit' variant='contained' color='primary' style={btn} onChange={onlog} >Login</Button>
                </form>

                <Typography>
                    <Link href='#'>
                       Forget Password ?
                    </Link>
                </Typography>
                <Typography>Do you have an account ?
                    <Link href='#'>
                       Sign Up ?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    </div>
  )
}

export default LoginMui