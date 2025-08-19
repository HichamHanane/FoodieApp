import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
function Navbar() {
    return (
        <header className='navbar'>
            <div className="logo">
                <Link to='/' className="logo">foodieApp</Link>
            </div>
            <nav className='nav_links'>
                <Link to="#" className='nav_link' ><GiShoppingCart className='icon_cart'/></Link>
            </nav>
        </header>
    )
}

export default Navbar
