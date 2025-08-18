import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
function App() {

  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
