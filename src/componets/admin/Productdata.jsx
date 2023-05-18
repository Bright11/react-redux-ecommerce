import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { FaTrash } from 'react-icons/fa'

function Productdata() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    const unsub= onSnapshot(
      collection(db,"product"),
      (snapshot)=>{
        let list=[];
        snapshot.docs.forEach((doc)=>{
          list.push({id:doc.id,...doc.data()})
        });
        setProduct(list)
      }
    )
    return()=>{
      unsub()
    }
  },[])
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {product?.map((pro)=>(
       <tr key={pro.id}>
       <th scope="row">
         <img src={pro.image} alt="" className="tableimg" />
       </th>
       <td>{pro.name}</td>
       <td>{pro.price}</td>
     <td><button><FaTrash/></button></td>
     </tr>
    ))}
    
    
  </tbody>
</table>
  )
}


export default Productdata