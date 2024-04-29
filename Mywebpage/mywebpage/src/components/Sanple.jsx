import React,{useState} from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar} from '@mui/material'
import AnchorIcon from '@mui/icons-material/Anchor';
import { TextField, IconButton, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//import { useNavigate } from 'react-router-dom';
// import { useTheme } from '@emotion/react';
const HeAder = () => {

    const [searchText, setSearchText] = useState('');
  
    const handleSearch = () => {
      // Implement your search logic here
      console.log('Search:', searchText);
    };
  const[value,setValue]=useState('');

  const st={
    backgroundColor:"#424242",
  }
  const se={
     backgroundColor:"#ffff",
     marginLeft:"10%",
  }

  
  //  const tt={
  //   padding:"10px",
  //   backgroundColor:'#424242',
  //   paddingLeft:'79%',
  //  }
    return (
        <>
    <AppBar position='static' style={st}>
        <Toolbar>
          <Button sx={{marginLeft:'auto'}} variant="contained"  >Login</Button>
          <Button sx={{marginLeft:'10px'}} variant="contained">SignUp</Button>
        </Toolbar>
        <Toolbar sx={{backgroundColor:'#FFF'}}>
            <AnchorIcon/>
            <Tabs textColor="secondary" value={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'  >
               <Tab label="Home"/>
               <Tab label="Trending"/>
               <Tab label="Recent Updates" />
               <Tab label="New Release" />
              

            </Tabs>
          
        <TextField
           style={se}
          label="Search for Gifts"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ShoppingCartIcon/>
        </Toolbar>
       
    </AppBar>
  


    </>
  )
}

export default HeAder