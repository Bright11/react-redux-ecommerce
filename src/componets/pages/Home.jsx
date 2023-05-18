import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import './home.css'
import Topproductslider from './Topproductslider'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from './Topslidersetting'
import Category from './Category'
import { FaArrowAltCircleDown, FaArrowDown } from 'react-icons/fa'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
function Home() {
    const [product,setProduct]= useState([])
    const [cat,setCat]= useState([])

    const [isloading,setIsloading]= useState(false)
    // useEffect(()=>{
       
    //     try {
    //         const res= axios.get("https://fakestoreapi.com/products").then((res)=>{
    //        // console.log(res.data)
    //         setProduct(res.data)
    //         setIsloading(true)
    //     }).catch((e)=>{
    //         console.log(e)
    //     })
    //     } catch (error) {
    //         console.log(error)
    //     }
     
    // },[product])
    useEffect(()=>{
        const unsub= onSnapshot(
          collection(db,"category"),
          (snapshot)=>{
            let list=[];
            snapshot.docs.forEach((doc)=>{
              list.push({id:doc.id,...doc.data()})
            });
          setIsloading(true)
          setCat(list)
          }
        )
        return()=>{
          unsub()
        }
      },[])

    useEffect(()=>{
      const unsub= onSnapshot(
        collection(db,"product"),
        (snapshot)=>{
          let list=[];
          snapshot.docs.forEach((doc)=>{
            list.push({id:doc.id,...doc.data()})
          });
        setIsloading(true)
          setProduct(list)
        }
      )
      return()=>{
        unsub()
      }
    },[])
    // console.log(product)
  return (
    <div className="app-content-holder">
    <div className='homepage'>
        {isloading?(
            <>
             <div className="productslider">
             <div className="category-container">
               <button>Category<FaArrowAltCircleDown/> </button>
               <div className="category">
               {cat?.map((product)=>(
                     <Category product={product} key={product.id}/>
                 ))}
                 
               </div>
             </div>
             <div className="topslider">
             <Carousel responsive={responsive}
              infinite={true}
              autoPlay={true }
              arrows={false}
             >
             {product?.map((product)=>(
                     <Topproductslider product={product} key={product.id}/>
                 ))}
     </Carousel>
             </div>
             </div>
            
                 <div className="product-content">
                 {product?.map((product)=>(
                     <Product product={product} key={product.id}/>
                 ))}
                 </div>
            </>
           
        ):(
            <div className="loading">
            <h1>Loading</h1>
        </div>
        )}
       
          
       </div>
    </div>
  )
}

export default Home