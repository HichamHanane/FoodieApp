import React from 'react'
import './DetailsPage.css'
import RestaurantDetails from '../../components/RestaurantDetails/RestaurantDetails'
import Navbar from '../../components/Navbar/Navbar'

function DetailsPage() {
    return (
        <div>
            <Navbar />
            <RestaurantDetails />
        </div>
    )
}

export default DetailsPage
