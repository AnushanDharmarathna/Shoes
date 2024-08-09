import React, { useContext } from 'react'
import './CSS/HomeCategory.css'
import { HomeContext } from '../Context/HomeContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

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
      <div className="homecategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="homecategory-sort">
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="homecatergory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div> 
      <div className="homecategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default HomeCategory;