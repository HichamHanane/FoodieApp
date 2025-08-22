import React, { useEffect } from 'react'
import './Restaurants.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../features/RestaurantSlice'
import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BiMap } from 'react-icons/bi'

function Restaurants() {
  const { restaurants, isloading, error } = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()

  const DisplaySkeletonCard = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div class="card-skeleton" key={index}>
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
          <div class="skeleton-title"></div>
          <div class="skeleton-line-1"></div>
          <div class="skeleton-line-2"></div>
        </div>
      </div>
    ))
  }

  const renderRestaurants = restaurants?.map((restaurant, index) => <RestaurantCard key={index} restaurant={restaurant} />)

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
          isloading
            ? DisplaySkeletonCard()
            : restaurants.length == 0
              ? <p>no restaurant avalaible now</p>
              : renderRestaurants

        }
      </div>
      {
        error != null ? <p>Error : {error}</p> : null
      }

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
