import React from 'react'
import './Breadcrums.css'
import breadcrums_arrow from '../Assets/breadcrums_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        HOME <img src={breadcrums_arrow} alt='' /> {product.category} <img src={breadcrums_arrow} alt='' /> {product.name}
    </div>
  )
}

export default Breadcrums