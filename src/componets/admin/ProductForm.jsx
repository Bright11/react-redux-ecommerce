import React, { useEffect, useState } from 'react'
import './adminHomepage.css'
import Adminsidebar from './Adminsidebar'
import AdminHomedata from './AdminHomedata'
import AdminTopbar from './AdminTopbar'
import './productForm.css'
import { FaCloud } from 'react-icons/fa'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function ProductForm() {
  const [cat,setCat]=useState([]);
  const [name,setName]=useState('')
  const [price,setPrice]=useState()
  const [category,setCategory]=useState('')
  const [description,setDescription]=useState('')
  const [keyword,setKeyword]=useState('')
  const [image,setImage]=useState(null)

const navigate= useNavigate()
  useEffect(()=>{
    const getcatdata= onSnapshot(
      collection(db,"category"),
      (snapsot)=>{
        let list=[];
        snapsot.docs.forEach((doc)=>{
          list.push({id:doc.id,...doc.data()})
        });
        setCat(list)
      }
    )
    return()=>{
      getcatdata()
    }
  },[])
  // console.log("cc",category)

  const handlsubmitpro= async(e)=>{
    
    e.preventDefault()
    if(name==="" || price==="" || image==="" || category===""){
      alert("all forms must be filed")
     
    }else{
      const imagename = new Date().getTime() + image.name;
      const storageRef = ref(storage, `images/${imagename}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("upload is runing");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl) => {
            // 
            const docRef = await addDoc(collection(db, "product"), {
              name: name,
              price:parseInt(price),
              description:description,
              keyword:keyword,
              category:category,
              image:downloadUrl
            });
            navigate("/adminpro")
            // 
          });
          return toast.info("Image uploaded succesfully");
        }
      );
      
// 
    }
  }
  return (
    <div className="adminHomepage">
    <AdminTopbar/>
      <div className="adminpage-container">
      <div className="sidebaradmin">
          <Adminsidebar/>
      </div>
      <div className="rightbaradmin productForm">
        {/*  */}
        <form onSubmit={handlsubmitpro}>
            <input type="text" placeholder='product name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='product price'  value={price} onChange={(e)=>setPrice(e.target.value)} />
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="" selected>Select - Category</option>
                {cat?.map((c)=>(
                  <option value={c.id} key={c.id}>{c.name}</option>
                ))}
            </select>
            <textarea  cols="105" rows="10" placeholder='product description'  value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <textarea  cols="105" rows="10" placeholder='product keywords'  value={keyword} onChange={(e)=>setKeyword(e.target.value)}></textarea>
            <label htmlFor="file"><FaCloud/> Click to Upload file </label>
            <input type="file" id='file' style={{display:'none'}} onChange={(e)=>setImage(e.target.files[0])} />
    <button>submit</button>
        </form>

        {/*  */}
      </div>
      
      </div>
  </div>
  )
}

export default ProductForm