import React from 'react'
import './RestaurantCard.css'
import { IoMdStar } from 'react-icons/io'


function RestaurantCard() {
    return (
        <div className="restaurants_container">
            <div className="restaurant_card">
                <img src="public\images\restaurant.jpg" alt="restaurant image" srcset="" />
                <div className="card_content">
                    <h1>imim</h1>
                    <p className="restaurant_ratings"><IoMdStar />2.5</p>
                </div>
            </div>
            <div className="restaurant_card">
                <img src="public\images\restaurant (1).jpg" alt="restaurant image" srcset="" />
                <div className="card_content">
                    <h1>imim</h1>
                    <p className="restaurant_ratings"><IoMdStar />2.5</p>
                </div>
            </div>
            <div className="restaurant_card">
                <img src="public\images\restaurant (2).jpg" alt="restaurant image" srcset="" />
                <div className="card_content">
                    <h1>imim</h1>
                    <p className="restaurant_ratings"><IoMdStar />2.5</p>
                </div>
            </div>
            <div className="restaurant_card">
                <img src="public\images\restaurant (1).jpg" alt="restaurant image" srcset="" />
                <div className="card_content">
                    <h1>imim</h1>
                    <p className="restaurant_ratings"><IoMdStar />2.5</p>
                </div>
            </div>

        </div>
    )
}

export default RestaurantCard
