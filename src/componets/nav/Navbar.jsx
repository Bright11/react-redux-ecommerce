import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from './logo/logo.jpg'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import './navbar.css'
import Cartdropdown from './Cartdropdown'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
function Navbar() {
  const[showcart,setSowcart] = useState(null)
 // const {cartTotalQuantity}= useSelector((state)=>state.products)
  const {cartTotalQuantity}=useSelector((state)=>state.products);
const navigate= useNavigate()
  const showcartdropdown=()=>{
   if(showcart){
    setSowcart(null)
   }else{
    setSowcart(true)
   }
  }
  const location = useLocation();
  if(window.location.pathname.startsWith("/admin")){
    return null
  }
  const logout=async()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="navbar">
        <nav className="nav">
            <div className="logo">
              <Link to="">
              <img src={logo} alt="" />
              </Link>
            </div>
        <ul className="ul">
            <div className="searchbar">
                <form action="">
                <input type="text" placeholder='Search' />
                <button title='Search'><FaSearch/> </button>
                </form>

            </div>
            <li><Link to="">Home</Link></li>
           {auth?(
          
             <li><Link to="#" onClick={logout}>Logout</Link></li>
           
           ):(
            <>
             <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            </>
           )}
            <li onClick={showcartdropdown}><Link to="#" className='cartbar-link'><FaShoppingBag/><span>{cartTotalQuantity}</span></Link></li>
        </ul>
        </nav>
        
      {showcart && <Cartdropdown/>}
    </div>
  )
}

export default Navbar