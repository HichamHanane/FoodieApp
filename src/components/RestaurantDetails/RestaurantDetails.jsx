import React, { useEffect } from 'react'
import './RestaurantDetails.css'
import { BiMap } from 'react-icons/bi'
import { MdOutlinePhone } from 'react-icons/md'
import { TbStarFilled } from 'react-icons/tb'
import { AiOutlineGlobal } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantDetails, getRestaurantMenu } from '../../features/RestaurantSlice'


function RestaurantDetails() {
    const {id}=useParams()
    const {restaurantDetails} = useSelector((state)=>state.restaurant);
    const {data}= restaurantDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        window.scroll(0,0)
        dispatch(getRestaurantDetails(id))
    },[])
    return (
        <div className='details_container'>
          <div className='content_container'>
             <h1 className='details_restaurant_name'>{data?.name}</h1> 
             <p className="details_full_adresse"><BiMap color='#C9392F'/>  {data?.address1}</p>
             <img src={`/images/restaurant (${Math.floor(Math.random() * 4)}).jpg`} alt="restaurant image" className="deatils_image"  width="600" height="300"/>
             {/* <img src={data?.photo_url} alt="" className="deatils_image"  width="600" height="350"/> */}

             <div className="more_restaurant_information">
              <p className="details_city"><BiMap color='#C9392F'/> {data?.city}</p>
              <p className="details_phone"><MdOutlinePhone color='#C9392F'/> {data?.localized_phone}</p>
              <p className="details_rating"><TbStarFilled color='#C9392F'/> {data?.avg_rating}</p>
              <p className="details_country"><AiOutlineGlobal color='#C9392F'/> {data?.country}</p>
             </div>
          </div>
        </div>
    )
}

export default RestaurantDetails
