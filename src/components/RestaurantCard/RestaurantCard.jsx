import React from 'react'
import './RestaurantCard.css'
import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BiMap } from 'react-icons/bi'


function RestaurantCard({ restaurant }) {
    return (


        <div className='restaurant_card_1'>
            <img src={restaurant?.photo_url} alt="restaurant image" />
            <Link to={`/restaurant-details/${restaurant?.id}`} className='restaurant_title_1'>{restaurant?.name}</Link>
            <div className="city_and_rating">
                <p className="city"><BiMap />{restaurant?.city}</p>
                <p className="rating"><IoMdStar color='#5B913B' />{restaurant?.avg_rating}</p>
            </div>
        </div>


    )
}

export default RestaurantCard
