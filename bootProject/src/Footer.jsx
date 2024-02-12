import React from 'react'
import { Toolbar, AppBar, Typography ,Stack} from '@mui/material';
export default function Footer() {
  return (
    <>
    
    <AppBar position="static">
      <Toolbar>
    
       
        <Stack spacing="40px" direction={'row'}>
        <Typography variant="h4" color="white">Footer Site</Typography>
          <Typography variant="h6" color="white"> <a href='/' >Home</a></Typography>
          <Typography variant="h6" color="white"><a href='/about'>About</a></Typography>
          
          
          </Stack>
        
      </Toolbar>


    </AppBar>
    
    
    </>
  )
}
