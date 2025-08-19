import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';
function App() {

  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant-details' element={<RestaurantDetails />} />
      </Routes>
    </>
  )
}

export default App
