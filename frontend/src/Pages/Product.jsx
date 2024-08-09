import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {HomeContext} from '../Context/HomeContext'
import Breadcrums from '../Components/Breadcrums/Breadcrums';

const Product = () => {
  const {all_product}= useContext(HomeContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
    </div>
  )
}

export default Product