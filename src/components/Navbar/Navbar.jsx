import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import { MdShoppingBag } from 'react-icons/md'
import { useSelector } from 'react-redux'
function Navbar() {
    let { number_of_commands } = useSelector((state) => state.panier)
    return (
        <header className='navbar'>
            <div className="logo">
                <Link to='/' className="logo">foodieApp</Link>
            </div>
            <nav className='nav_links'>
                <Link to="#" className='nav_link' ><MdShoppingBag className='icon_cart' /></Link>
                <div className="command_number">
                    {number_of_commands}
                </div>
            </nav>

        </header>
    )
}

export default Navbar
