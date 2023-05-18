import React from 'react'
import './adminHomepage.css'
import Adminsidebar from './Adminsidebar'
import AdminHomedata from './AdminHomedata'
import AdminTopbar from './AdminTopbar'
function AdminHome() {
  return (
    <div className="adminHomepage">
      <AdminTopbar/>
        <div className="adminpage-container">
        <div className="sidebaradmin">
            <Adminsidebar/>
        </div>
        <div className="rightbaradmin">
        <AdminHomedata/>
        </div>
        
        </div>
    </div>
  )
}

export default AdminHome