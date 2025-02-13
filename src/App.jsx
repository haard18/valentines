import React from 'react'
import './App.css'
import Letter from './components/Letter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import Playlist from './components/Playlist'
import Surprise from './components/Surprise'
const App = () => {
  return (
    <BrowserRouter>
      {/* <Letter/> */}
      <Routes>
        <Route path="/" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path="/surprise" element={<Surprise/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App