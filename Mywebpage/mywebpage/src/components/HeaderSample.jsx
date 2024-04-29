import React,{useState} from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar} from '@mui/material'
import AnchorIcon from '@mui/icons-material/Anchor';
import DrawerComp from './DrawerComp';
import { useNavigate } from 'react-router-dom';
// import { useTheme } from '@emotion/react';
const HeAder = () => {
  const[value,setValue]=useState('');
  // const theme=useTheme();
  // const re=useMediaQuery(theme.breakpoint.down("cd"));
  const img={
    backgroundImage:'url("https://wallpaperaccess.com/full/4167709.gif")',
    backgroundSize:'cover',
    width:'100vw',
    height:'100vh',
    
  }
  const log = (event) =>{
       event.preventDefault();
       navigate('/login')

  }
  const navigate=useNavigate();
  return (
    <>

    <div style={img}>
    <AppBar sx={{background:'#212121'}}>
        <Toolbar>
            <AnchorIcon/>
              
                {/* re ? (
                    <>
                    <Typography>
                    hello
                    </Typography>
                    </>
                  ) */}


            
        


            <Tabs textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
               <Tab label="Home"/>
               <Tab label="Trending"/>
               <Tab label="Recent Updates" />
               <Tab label="New Release" />
              

            </Tabs>
               <Button sx={{marginLeft:'auto'}} variant="contained" onClick={log} >Login</Button>
               <Button sx={{marginLeft:'10px'}} variant="contained">SignUp</Button>
        </Toolbar>
        <DrawerComp/>
    </AppBar>
     </div>


    </>
  )
}

export default HeAder