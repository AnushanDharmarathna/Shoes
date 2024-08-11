import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="description-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Step into style with our online shoe emporium. Browse a vast collection of footwear for all occasions, 
                from casual sneakers to elegant heels. Enjoy easy navigation, detailed product information, 
                and secure checkout. Find your perfect fit with our size guide and customer reviews.</p>
            <p>Your one-stop online shopping destination. Discover a wide range of products from top 
                brands at competitive prices. Enjoy secure payments, fast shipping, and excellent customer service. 
                Shop anytime, anywhere with our user-friendly mobile app. Sign up for exclusive deals and 
                personalized recommendations.</p>
        </div>
    </div>
  )
}

export default DescriptionBox