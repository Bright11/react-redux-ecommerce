import React,{useState} from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
function Login() {

    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const navigate= useNavigate()
    const login= async(e)=>{
        e.preventDefault()
      try {
        if(password || email){
            signInWithEmailAndPassword(auth, email, password)
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
        <form onSubmit={login} className="registerform">
            <input type="email" placeholder='email@domain.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='password******' value={password} onChange={(e)=>setPassword(e.target.value)}/>
           
            <button>Login</button>
            <Link to="/register">Register</Link>
        </form>
    </div>
  )
}

export default Login