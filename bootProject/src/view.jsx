import React from 'react'
import Footer from './footer'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './header'





export default function View() {
  return (

    <Stack spacing={44}>
 <Header/>
    
    <Outlet/>
    <Footer/>
    </Stack>
  )
}
