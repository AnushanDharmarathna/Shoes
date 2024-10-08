import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { HomeContext } from '../../Context/HomeContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt='' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike 
                Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike 
                Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike Nike
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>40</div>
                    <div>41</div>
                    <div>42</div>
                    <div>43</div>
                    <div>44</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category : </span>Nike</p>
            <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay