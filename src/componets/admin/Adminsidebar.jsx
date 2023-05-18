import React from 'react'
import { FaAddressCard, FaBookReader } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './adminsidebar.css'
import { AiOutlineBars } from 'react-icons/ai'
function Adminsidebar() {
  return (
    <div className="adminsidebar">
      <div className="dasboardsidebar">
      <ul className='dasboardsidebarul'>
        <li><Link to="/admin"><AiOutlineBars/> Dasboard</Link></li>
        <li><Link to=""><FaAddressCard/>users </Link></li>
        <li><Link to=""><FaBookReader/> Order</Link></li>
        <li><Link to="/adminpro"><FaAddressCard/>Products </Link></li>
        <li><Link to="/adminaddpro"><FaAddressCard/>Add Products </Link></li>
        <li><Link to=""><FaAddressCard/>Category </Link></li>
        <li><Link to="/adminaddcat"><FaAddressCard/>Add category </Link></li>
        <li><Link to=""><FaAddressCard/>Settings </Link></li>


      </ul>
      </div>
    </div>
  )
}

export default Adminsidebar