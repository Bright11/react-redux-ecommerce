import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import { FaTrash } from 'react-icons/fa'

function Categorydata() {
  const [catdata,setCatdata]= useState([])
 
  useEffect(()=>{
   const unsub = onSnapshot(
    collection(db,"category"),
    (snapshot)=>{
      let list=[];
      snapshot.docs.forEach((doc)=>{
        list.push({id:doc.id, ...doc.data()})
      });
      setCatdata(list)
    }
   );
   return()=>{
    unsub()
   }

  },[])
  console.log("bb",catdata)
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Category Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

 {catdata?.map((c)=>(
 <tr key={c.id}>
 <td>{c.name}</td>
 <td><FaTrash/></td>
</tr>
 ))}

   

   
    


    
    
  </tbody>
</table>
  )
}

export default Categorydata