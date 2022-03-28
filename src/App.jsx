import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Character from './components/Character'
import Main from './components/Main'

import './App.css'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
       <Routes>
         <Route path='/' element={<Main/>} />
         <Route path='/character/:id' element={<Character/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
