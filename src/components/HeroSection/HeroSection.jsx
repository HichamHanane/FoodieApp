import React from 'react'
import './HeroSection.css'
import { RiFacebookFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import { GiSandwich } from 'react-icons/gi'
function HeroSection() {
    return (
        <section className='hero_section'>

            <div className="hero_heading">
                <h1>FoodieApp</h1>
            </div>
            <div className="navigation_links">
                {/* <button className="all_restaurants">
                    All restaurants
                </button> */}
                <div class="scrolldown" >
                    <div class="chevrons">
                        <div class="chevrondown"></div>
                        <div class="chevrondown"></div>
                    </div>
                </div>
                {/* <div className="social_media">
                    <RiInstagramFill className='social_icon' />
                    <RiFacebookFill className='social_icon' />
                    <RiTwitterXFill className='social_icon' />

                </div> */}
            </div>
            <div className="random_dishes">
                <img src="images\plate.png" alt="plate image" srcset="" className='plate' />
                <img src="images\plate (2).png" alt="plate image" srcset="" className='sandwich' />
                <img src="images\plate (3).png" alt="plate image" srcset="" className='pizza' />
            </div>

        </section>
    )
}

export default HeroSection
