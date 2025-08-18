import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Restaurants from '../../components/AllRestaurants/Restaurants'


function Home() {
  return (
    <div className='home_page_container'>
      <Navbar />
      <HeroSection />
      <Restaurants />
    </div>
  )
}

export default Home
