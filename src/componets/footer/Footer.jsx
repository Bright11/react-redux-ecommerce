import React from 'react'
import './footer.css'
import { useLocation } from 'react-router-dom';
function Footer() {
  if(window.location.pathname.startsWith("/admin")){
    return null
  }
  return (
    <div className='footer'>
        <p>
        Copyright © 2023 Chika Nwazuo
        </p>
    </div>
  )
}

export default Footer