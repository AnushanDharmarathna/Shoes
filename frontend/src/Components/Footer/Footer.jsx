import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo.png'
import instra_icon from '../Assets/icons-instagram.png'
import fb_icon from '../Assets/icons-facebook.png'
import whatsapp_icon from '../Assets/icons-whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt=''/>
            <p>SHOES</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-cotainer">
                <img src={instra_icon} alt=''/>
            </div>
            <div className="footer-icons-cotainer">
                <img src={fb_icon} alt=''/>
            </div>
            <div className="footer-icons-cotainer">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer