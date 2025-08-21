import React, { useEffect, useState } from 'react'
import './RestaurantMenu.css'
import { FaPlus } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantMenu } from '../../features/RestaurantSlice'
import { CgUnavailable } from 'react-icons/cg'
import { Add } from '../../features/PanierSlice'


function RestaurantMenu() {
    const { id } = useParams()
    const { resturantMenu } = useSelector((state) => state.restaurant);
    const dispatch = useDispatch()
    let [menu, setMenu] = useState([])

    const displayMenu = menu?.map((menu, index) => {
        return (
            <div className="menu_card" key={index}>
                <div>
                    {
                        menu?.Photo == ""
                            ? <p className='no_photo_available'> photo Unavailable</p>
                            : <img src={menu?.Photo} alt="resturant image" srcset="" className='food_image' loading='lazy' />
                    }

                </div>
                <p className="food_name">{menu?.['Food Name']}</p>
                <div className="menu_card_bottom">
                    <p className="food_price">{menu?.Price}$</p>
                    <button onClick={()=>dispatch(Add(menu))}><FaPlus />Ajouter au panier</button>
                </div>

            </div>
        )

    })
    useEffect(() => {
        let restu_menu = JSON.parse(localStorage.getItem('restaurant-menu'));

        console.log('Restaurant menu in the component :', restu_menu);
        setMenu(restu_menu)
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
                        menu?.length == 0
                            ? <div className='no_menu_available'>
                                <CgUnavailable color='#5B913B' size="50px" />
                                <p>menu Unavailable now </p>
                            </div>
                            : displayMenu
                    }


                </div><br /><br />
            </div>

        </>
    )
}

export default RestaurantMenu
