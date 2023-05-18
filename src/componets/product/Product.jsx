import React from 'react'
import './product.css'
import { Link } from 'react-router-dom';
import {  FaEye, FaHeart, FaShoppingBasket } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../productslice/productslice';
function Product({product}) {
  const dispatch= useDispatch()
  const addtocart=(product)=>{
    dispatch(addTocart(product))
  }
  return (
    <div className="productpage">
        <div className="productimg">
            <img src={product.image} alt="" />
        </div>
        <div className="productname">
          {/* <h1>{product.title.substring(0,15)}</h1> */}

          <h1>{product.name}</h1>          <p>${product.price}</p>
        </div>
        <div className="cart-holder" id='cart-holder'>
         <div> <Link to=""><FaEye size={20} color='white'/> </Link></div>
          <div><Link to=""><FaHeart size={20} color='white'/>  </Link></div>
         <div> <button onClick={()=>addtocart(product)}> <FaShoppingBasket size={20} color='white'/> </button></div>
        </div>
    </div>
  )
}

export default Product