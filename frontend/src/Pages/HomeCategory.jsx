import React, { useContext } from 'react'
import './CSS/HomeCategory.css'
import { HomeContext } from '../Context/HomeContext'

const HomeCategory = (props) => {
  const {all_product} = useContext(HomeContext);
  return (
    <div className="home-category">
      <img src={props.banner} alt='' />
    </div>
  )
}

export default HomeCategory;