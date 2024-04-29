import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
import DrawerComp from './DrawerComp';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState(0); // Initialize value with 0, which corresponds to the first tab
  const navigate = useNavigate();

  const imgStyle = {
    backgroundImage: 'url("https://wallpaperaccess.com/full/4167709.gif")',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  };

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the value of the selected tab
  };

  const handleLogin = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div style={imgStyle}>
      <AppBar sx={{ background: '#212121' }}>
        <Toolbar>
          <AnchorIcon />

          <Tabs textColor="inherit" value={value} onChange={handleChange} indicatorColor="secondary">
            <Tab label="Home" />
            <Tab label="Trending" />
            <Tab label="Recent Updates" />
            <Tab label="New Release" />
          </Tabs>

          <Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button sx={{ marginLeft: '10px' }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </div>
  );
};

export default Header;
