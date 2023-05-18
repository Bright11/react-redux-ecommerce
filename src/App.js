import React, { useEffect } from 'react'
import './App.css'
import Home from './componets/pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './componets/footer/Footer'
import Navbar from './componets/nav/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from './productslice/productslice'
import AdminHome from './componets/admin/AdminHome'
import Categoryform from './componets/admin/Categoryform'
import Productadmin from './componets/admin/Productadmin'
import ProductForm from './componets/admin/ProductForm'
import MyOrder from './componets/pages/MyOrder'
import Register from './componets/login/Register'
import Login from './componets/login/Login'
function App() { 
  const products=useSelector((state)=>state.products);
  const dispatch= useDispatch()
  useEffect(()=>{
  dispatch(getTotal())
},[products])
  return (
       <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/adminaddcat' element={<Categoryform/>}/>
      <Route path='/adminpro' element={<Productadmin/>}/>
      <Route path='/adminaddpro' element={<ProductForm/>}/>
      <Route path='/order' element={<MyOrder/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App