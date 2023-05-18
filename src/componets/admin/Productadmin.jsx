import React from 'react'
import './adminHomepage.css'
import Adminsidebar from './Adminsidebar'
import AdminHomedata from './AdminHomedata'
import AdminTopbar from './AdminTopbar'
import Categorydata from './Categorydata'
import './category.css'
import { FaSearch } from 'react-icons/fa'
import Productdata from './Productdata'
function Productadmin() {
    return (
        <div className="adminHomepage">
          <AdminTopbar/>
            <div className="adminpage-container">
            <div className="sidebaradmin">
                <Adminsidebar/>
            </div>
            <div className="rightbaradmin categorypage">
         
          <div className="categorydata">
            <Productdata/>
          </div>
            </div>
            
            </div>
        </div>
    )
}

export default Productadmin