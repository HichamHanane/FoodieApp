import React from 'react'
import './Restaurants.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

function Restaurants() {
  return (
    <section className='restaurants_section'>
      <div className="restaurants_header">
        <h1>Our Restaurants</h1>
      </div>
      <RestaurantCard />
    </section>
  )
}

export default Restaurants
