import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import DetailsPage from './pages/RestaurantDetails/DetailsPage';
function App() {

  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant-details/:id' element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App
