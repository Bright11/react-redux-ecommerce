import React, { useEffect, useState } from 'react'
import './cartdropdownpage.css'
import { FaTrash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Removefromcart, addTocart, clearallcart, decreascart, getTotal } from '../../productslice/productslice'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
function Cartdropdown() {
    const [cartnumber,setCartnumber]= useState(1)
    const products=useSelector((state)=>state.products);
  const {cartTotalAmount}=useSelector((state)=>state.products);
  const navigate= useNavigate()

    const dispatch= useDispatch()
    const increase=(cart)=>{
        dispatch(addTocart(cart))
    }
    
    const decrease=(cart)=>{
        dispatch(decreascart(cart))
    }
    const removecart=(cart)=>{
        dispatch(Removefromcart(cart))
    }
    const emptycart=()=>{
        dispatch(clearallcart())
    }
   
    // checkoutorder

    const checkoutorder=async()=>{
       try {
        if(cartTotalAmount){
            const order=await addDoc(collection(db,"orders"),{
                ...products,
                username:"chika 2"
            }).then(()=>{
                navigate("/order")
            })
        }
       } catch (error) {
        
       }
    }

    // the end of checkoutorder
  return (
    <div className='cartdropdownpage'>
        <div className="cartdropdownmaindiv">
            {products.items.length === 0? (
                <h1>No items in the cart</h1>
            ):(
                <h1>My cart</h1>
            )}
           
            {products.items?.map((cart)=>(
                 <div className="cartdropdown-content" key={cart.id}>
                 <div className="catrdropimg">
                     <img src={cart.image} alt="" />
                 </div>
                <div className='cartprice'>
                    <h1>{cart.price}</h1>
                </div>
                 <div className="increasecartdiv">
                     <button onClick={()=>increase(cart)}>+</button>
                  
                     <h1>{cart.cartqty}</h1>
                     <button onClick={()=>decrease(cart)}>-</button>
                 </div>
                 <div className='cartprice'>
                    <h1>{cart.price * cart.cartqty}</h1>
                 </div>
                 <div className="removecartindropdown">
                    <button onClick={()=>removecart(cart)}> <FaTrash/></button>
                 </div>
             </div>
            ))}
       <div className="total">
        {products.carttotalamont}
       </div>
      <div className="totalorder">
                <h2>Total ${cartTotalAmount}</h2>
      </div>
        <div className="cartdropdownlinks">
            <Link to="">Cart</Link>
            <Link to="#" onClick={emptycart}>Empty cart</Link>
            <Link to="#" onClick={checkoutorder} >Checkout</Link>

        </div>
        
        </div>
    </div>
  )
}

export default Cartdropdown