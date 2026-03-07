import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import './style.css'
import { ThemeProvider } from './ThemeContext'

const Main = () => {
  return (

    <div className='main'>
    <ThemeProvider>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element=<Home/>/>
        <Route path='/about' element=<About/>/>
        <Route path='/blog' element=<Blog/>/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default Main