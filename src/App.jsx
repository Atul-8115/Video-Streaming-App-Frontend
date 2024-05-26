import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: "#000"}}>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
            <Route path='/channel/:id' element={<ChannelDetails/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
