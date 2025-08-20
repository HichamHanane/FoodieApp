import React, { useEffect } from 'react'
import './RestaurantMenu.css'
import { FaPlus } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantMenu } from '../../features/RestaurantSlice'
import { CgUnavailable } from 'react-icons/cg'


function RestaurantMenu() {
    const { id } = useParams()
    const { resturantMenu } = useSelector((state) => state.restaurant);
    const dispatch = useDispatch()
    const displayMenu = resturantMenu?.menu?.map((menu, index) => {
        return (
            <div className="menu_card" key={index}>
                <div>
                    {
                        menu?.Photo == ""
                            ? <p className='no_photo_available'>no photo available</p>
                            : <img src={menu?.Photo} alt="resturant image" srcset="" className='food_image' loading='lazy'/>
                    }

                </div>
                <p className="food_name">{menu?.['Food Name']}</p>
                <div className="menu_card_bottom">
                    <p className="food_price">{menu?.Price}$</p>
                    <button><FaPlus />Ajouter au panier</button>
                </div>

            </div>
        )

    })
    useEffect(() => {
        console.log('Restaurant menu in the component :', resturantMenu.menu);
        // dispatch(getRestaurantMenu(id));
    }, [])
    return (
        <>
            <div className='restaurant_menu_section'>
                <div className="restaurant_menu_header">
                    <h1>Restaurant's Menu </h1>
                </div>
                <div className="menu_container">
                    {
                        resturantMenu.menu?.length == 0
                            ? <div className='no_menu_available'>
                                <CgUnavailable color='#5B913B'  size="50px"/>
                                <p>No menu available now </p>
                            </div>
                            : displayMenu
                    }
            
            
                </div><br /><br />
            </div>
            
        </>
    )
}

export default RestaurantMenu
