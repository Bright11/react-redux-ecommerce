import React, { useEffect, useState } from 'react'
import './adminHomepage.css'
import Adminsidebar from './Adminsidebar'
import AdminHomedata from './AdminHomedata'
import AdminTopbar from './AdminTopbar'
import Categorydata from './Categorydata'
import './category.css'
import { FaSearch } from 'react-icons/fa'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

function Categoryform() {
const [cat,setCat]= useState()

  const handlesubmit= async(e)=>{
    e.preventDefault()
    try {
      if(cat){
        // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "category"), {
name:cat
});
console.log("Document written with ID: ", docRef.id);
setCat("")
      }else{
        // cart is empty
      }
    } catch (e) {
      
    }
  }

 
 
    return (
        <div className="adminHomepage">
          <AdminTopbar/>
            <div className="adminpage-container">
            <div className="sidebaradmin">
                <Adminsidebar/>
            </div>
            <div className="rightbaradmin categorypage">
          <div className="categoryform">
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder='category name' value={cat} onChange={(e)=>setCat(e.target.value)}  />
                <button><FaSearch/></button>
            </form>
          </div>
          <div className="categorydata">
            <Categorydata />
          </div>
            </div>
            
            </div>
        </div>
    )
}

export default Categoryform