import React,{useState} from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
function Register() {

    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [cpassword,setCpassword]= useState("")
    const navigate= useNavigate()
    const register= async(e)=>{
        e.preventDefault()
      try {
        if(password === cpassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
            }).then(()=>{
                navigate("/")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }else{
            alert("password did not match")
        }
      } catch (error) {
        
      }
    }
  return (
    <div className="register">
        <form onSubmit={register} className="registerform">
            <input type="email" placeholder='email@domain.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='password******' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder='confirm password******' value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
            <button>Register</button>
            <Link to="/login">Already has an account? login</Link>
        </form>
    </div>
  )
}

export default Register