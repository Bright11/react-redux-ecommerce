import React from 'react'
import { AiOutlineBars, AiTwotoneAppstore } from 'react-icons/ai'
import './admintopbar.css'
import {  FaShoppingBasket } from 'react-icons/fa'
import { FiAlignJustify, FiBellOff } from "react-icons/fi";
import logo from '../nav/logo/logo.jpg'
function AdminTopbar() {
  return (
    <div className="admintopbar">
        <div className="admincompanylogo">
           <img src={logo} alt="" />
            <button><FiAlignJustify size="24"/></button>
        </div>
        <div className="admintopbarright">
           <button> <FiBellOff size="24"/></button>
            <button><FaShoppingBasket size="24"/></button>
            <button><AiTwotoneAppstore size="24"/></button>
        </div>
    </div>
  )
}

export default AdminTopbar