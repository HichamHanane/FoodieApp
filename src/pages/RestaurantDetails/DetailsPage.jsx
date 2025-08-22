import React from 'react'
import './DetailsPage.css'
import RestaurantDetails from '../../components/RestaurantDetails/RestaurantDetails'
import Navbar from '../../components/Navbar/Navbar'
import RestaurantMenu from '../../components/RestaurantMenu/RestaurantMenu'
import Footer from '../../components/Footer/Footer'

function DetailsPage() {
    return (
        <div className='page_details_container'>
            <Navbar />
            <RestaurantDetails />
            <RestaurantMenu />
            <Footer />
        </div>
    )
}

export default DetailsPage
