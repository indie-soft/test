import React from 'react'
import { Toolbar, AppBar, Typography ,Stack} from '@mui/material';

export default function Header() {
  return (
    <>
    
    <AppBar position="static">
      <Toolbar>
  
       
        <Stack spacing="40px" direction={'row'}>
        <Typography variant="h4" color="white">Vite Site</Typography>
          <Typography variant="h6" color="white">Home</Typography>
          <Typography variant="h6" color="white">About</Typography>
          
          
          </Stack>
        
      </Toolbar>


    </AppBar>
    
    
    </>
  )
}
