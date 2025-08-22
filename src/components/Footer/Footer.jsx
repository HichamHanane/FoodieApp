import React from 'react'
import './Footer.css'
import { RxInstagramLogo } from 'react-icons/rx'
import { LiaFacebook, LiaTwitter } from 'react-icons/lia'
function Footer() {
  return (
    <footer className='footer'>
      <div className="footer_logo">
        <h1>Foodieapp</h1>
      </div>
      <div className="social_footer">
        <RxInstagramLogo className='footer_icon'/>
        <LiaFacebook className='footer_icon'/>
        <LiaTwitter className='footer_icon'/>
      </div>
    </footer>
  )
}

export default Footer
