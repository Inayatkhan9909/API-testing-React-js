

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import News from './components/News'

const App = () => {


  return (
    <div>
        <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/News'  element={<News/>}/>
       </Routes>
        </BrowserRouter>
        
        </div>
  )
}

export default App