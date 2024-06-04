import React from 'react'
import './Hero.css'
import thumbs_up from '../Assets/Thumb_Up.png'
import hero_image from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVAS ONLY</h2>
            <div>
                <div className="icon">
                    <p>New</p>
                    <img src={thumbs_up} alt=''/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero