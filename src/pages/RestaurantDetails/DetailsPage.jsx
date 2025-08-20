import React from 'react'
import './DetailsPage.css'
import RestaurantDetails from '../../components/RestaurantDetails/RestaurantDetails'
import Navbar from '../../components/Navbar/Navbar'
import RestaurantMenu from '../../components/RestaurantMenu/RestaurantMenu'

function DetailsPage() {
    return (
        <div className='page_details_container'>
            <Navbar />
            <RestaurantDetails />
            <RestaurantMenu />
        </div>
    )
}

export default DetailsPage
