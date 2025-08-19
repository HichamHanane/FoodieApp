import React, { useEffect } from 'react'
import './Restaurants.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../features/RestaurantSlice'
import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BiMap } from 'react-icons/bi'

function Restaurants() {
  const { restaurants } = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRestaurants())
  }, [])
  console.log('Restaurants :', restaurants);

  return (
    <section className='restaurants_section'>
      <div className="restaurants_header">
        <h1>Our Restaurants</h1>
      </div>
      <div className="restaurant_card_container">

        {
          restaurants?.map((restaurant, index) => {
            return (
              <RestaurantCard key={index} restaurant={restaurant} />
            )
          })
        }
      </div>

      {/* <div className="restaurant_card_container">
        <div className='restaurant_card_1'>
          <img src="public\images\restaurant (1).jpg" alt="restaurant image" />
          <Link className='restaurant_title_1'>Restaurant Title</Link>
          <div className="city_and_rating">
            <p className="city">Casablanca</p>
            <p className="rating"><IoMdStar color='#5B913B' />5.8</p>
          </div>
        </div>
        <div className='restaurant_card_1'>
          <img src="public\images\restaurant (1).jpg" alt="restaurant image" />
          <Link className='restaurant_title_1'>Restaurant Title</Link>
          <div className="city_and_rating">
            <p className="city"><BiMap color='#5B913B' />Casablanca</p>
            <p className="rating"><IoMdStar color='#5B913B' />5.8</p>
          </div>
        </div>
        <div className='restaurant_card_1'>
          <img src="public\images\restaurant (1).jpg" alt="restaurant image" />
          <Link className='restaurant_title_1'>Restaurant Title</Link>
          <div className="city_and_rating">
            <p className="city">Casablanca</p>
            <p className="rating"><IoMdStar color='#5B913B' />5.8</p>
          </div>
        </div>
        <div className='restaurant_card_1'>
          <img src="public\images\restaurant (1).jpg" alt="restaurant image" />
          <Link className='restaurant_title_1'>Restaurant Title</Link>
          <div className="city_and_rating">
            <p className="city">Casablanca</p>
            <p className="rating"><IoMdStar color='#5B913B' />5.8</p>
          </div>
        </div>
      </div> */}

      
    </section>
  )
}

export default Restaurants
