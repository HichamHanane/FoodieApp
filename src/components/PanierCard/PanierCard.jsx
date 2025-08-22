import React from 'react'
import './PanierCard.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Delete } from '../../features/PanierSlice'

function PanierCard({ menu }) {
    const dispatch = useDispatch()
    return (
        <div className="panier_card">
            {
                menu?.Photo == "" ? <div className="panier_no_photo">photo Unavailable</div>
                    : <img src={menu?.Photo} alt="menu image" srcset="" width="100px" />
            }
            <div className="panier_food_name_price">
                <p className="panier_food_name">{menu?.['Food Name']}</p>
                <p className="panier_food_price">{menu?.Price}$</p>
            </div>
            <RiDeleteBin5Line className='delete_icon' onClick={()=> dispatch(Delete({name:menu?.['Food Name'],price:menu?.Price}))} />
        </div>
    )
}

export default PanierCard
