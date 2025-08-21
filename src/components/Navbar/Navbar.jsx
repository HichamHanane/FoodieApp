import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import { MdShoppingBag } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Panier from '../Panier/Panier'
import { AiOutlineClose } from 'react-icons/ai'
function Navbar() {
    let { number_of_commands } = useSelector((state) => state.panier)
    let [openPanier, setOpenPanier] = useState(false);
    return (
        <>
            <header className='navbar'>
                <div className="logo">
                    <Link to='/' className="logo">foodieApp</Link>
                </div>
                <nav className='nav_links'>

                    <div className='nav_link' onClick={() => setOpenPanier(!openPanier)}>
                        {
                            !openPanier ? <MdShoppingBag className='icon_cart' /> : <AiOutlineClose className='icon_cart' />
                        }
                    </div>
                    <div className="command_number">
                        {
                            !openPanier ? number_of_commands : null
                        }
                    </div>
                </nav>
            </header>
            {
                !openPanier ? null : <Panier />
            }

        </>
    )
}

export default Navbar
