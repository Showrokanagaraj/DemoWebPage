
import { Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
   const [open,setOpen]=useState(false);

  return (
    <>
    <Drawer open={open} onClose={()=>setOpen(false)} >
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>
                    Login
                </ListItemText>
            </ListItemIcon>
        </ListItemButton>
    </Drawer>
    <IconButton onClick={()=>setOpen(!open)}>
     <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerComp