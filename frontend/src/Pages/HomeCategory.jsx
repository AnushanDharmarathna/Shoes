import React, { useContext } from 'react'
import './CSS/HomeCategory.css'
import { HomeContext } from '../Context/HomeContext'

const HomeCategory = (props) => {
  const {all_product} = useContext(HomeContext);
  return (
    <div className="home-category">
      <div className="banner">
        <div className="banner-left">
          <h1>FLAT 50% OFF</h1>
          <h2>12 Hours 20 Mins</h2>
          <button>Explore Now</button>
        </div>
        <div className="banner-right">
          <img src={props.banner} alt='' />
        </div>
      </div>
      
    </div>
  )
}

export default HomeCategory;