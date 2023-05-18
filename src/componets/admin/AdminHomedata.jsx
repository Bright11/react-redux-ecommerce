import React from 'react'
import './AdminHomedata.css'
import { FaDotCircle, FaShoppingBasket, FaUser, FaUserAlt } from 'react-icons/fa'
import { AiOutlineEllipsis } from "react-icons/ai";
import { Link } from 'react-router-dom';
import UserTable from './UserTable';
function AdminHomedata() {
  return (
    <div className='AdminHomedata'>
        <div className="AdminHomedata-content">
               {/* center content */}
        <div className="maindata">
           {/*  */}

           <div className="maindata-content">
            <div className="salesdiv">
                <div className="divsales">
                    <h1>Sale | Today</h1>
                    <h1>$279</h1>
                    <AiOutlineEllipsis size={24}/>
                </div>
                <div className="divsales">
                    <h1>Number Order</h1> 
                     <h1>300</h1>
                    <FaShoppingBasket/>
                </div>
            </div>
            <div className="salesdiv">
                <div className="divsales">
                    <h1>Revenue</h1>
                    <h1>7000</h1>
                    <AiOutlineEllipsis size={24}/>
                    
                </div>
                <div className="divsales">
                    <h1>Number Order</h1>
                    <FaShoppingBasket/>
                </div>
            </div>
            
            </div>
            <div className="customers">
              <div className="div-customer">
              <h1>Customers | <small>This year</small></h1>
              <AiOutlineEllipsis size={24}/>
              </div>
                <div className="customersicon">
                    <FaUserAlt/>
                    <h1>1244</h1>
                </div>
            </div>
            <div className="productadmin">
            <div className="itemstable">
                {/*  */}
               <UserTable/>
                {/*  */}
            </div>
       </div>
          {/*the end of center content */}
        </div>
        <div className="maindatarightbar">
        <h1>Registered user</h1>
       {/*  */}
       <div className="registereduseradmin">
       <div className="adminsidebar-users">
           <Link to=""> <h1>Chika Nwazuo</h1>
            <h1> <FaUserAlt/></h1>
            </Link>
        </div>
        <div className="adminsidebar-users">
        <Link to=""> <h1>Chika Nwazuo</h1>
            <h1> <FaUserAlt/></h1>
            </Link>
        </div>
        <div className="adminsidebar-users">
        <Link to=""> <h1>Chika Nwazuo</h1>
            <h1> <FaUserAlt/></h1>
            </Link>
        </div>
        <div className="adminsidebar-users">
        <Link to=""> <h1>Chika Nwazuo</h1>
            <h1> <FaUserAlt/></h1>
            </Link>
        </div>
        <div className="adminsidebar-users">
        <Link to=""> <h1>Chika Nwazuo</h1>
            <h1> <FaUserAlt/></h1>
            </Link>
        </div>
       </div>
       {/*  */}
      <div className="visitors">
        <FaUser/>
        <h1>Visitors</h1>
      </div>
        </div>
      
        </div>
    </div>
  )
}

export default AdminHomedata