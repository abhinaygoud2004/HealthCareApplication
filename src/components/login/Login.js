import React from 'react'
import {useNavigate } from 'react-router-dom'
import { useState ,useContext,useEffect} from 'react'
import {AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineLock} from "react-icons/ai";
import {FiLogIn} from "react-icons/fi"
import {set, useForm} from 'react-hook-form'
import './Login.css'
import { loginContext } from '../../contexts/loginContext'
import axios from "axios"
function Login() {

//navigate hook
let navigate=useNavigate()
let [currentUser,loginErr,userLoginStatus,loginUser]=useContext(loginContext)
let {register,handleSubmit,formState:{errors}}= useForm();
let [err,setErr]=useState("")

let addNewUser=(newUser)=>{
  loginUser(newUser)
}


useEffect(()=>{
  if(userLoginStatus===true){
    navigate("/user-profile")
  }
},[userLoginStatus])


  return (
    <div className='allow-user'>
     

     <div className="mt-5 ms-3">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/20/Online-Medical-Support-Doctor-Graphics-7931756-1.jpg" alt="Image unavailable" className="loginimg2" width="" height="600px" />
      </div>
      {/*responsive form */}
      <div className="loginform w-50 me-5">
        {/*HTTP err message */}
        {loginErr.length!=0&&<p className='display-3 fw-bold text-center text-danger'>{loginErr}</p>}
        
        
        <div className="mx-auto">
        <h1 className=" hlf mb-5"> Login</h1>
<form  onSubmit={handleSubmit(addNewUser)} action="">
<p className='lead'>Username/Email</p>
  <div className="mb-3 input-group">
    {/* <label htmlFor="username">Name  </label> */}
    <span className='input-group-text'><span className='fs-3'><AiOutlineUserAdd/></span></span>
    <input type="text" name="" id="username" className='form-control fs-3' {...register("username",{required:true})} />
  </div>
  {errors.name?.type==="required"&&<p className='text-danger fw-bold'>*Name is required</p>}
  <p className='lead'>Password</p>
   <div className="mb-3 input-group form-floating ">
   <span className='input-group-text'><span className='fs-3 d-block'><AiOutlineLock/></span></span>
    <input className='form-control fs-3 ' type="password" name="password" id="password" placeholder='' {...register("password",{required:true})} />
   </div>
  {/* submit button */}
  <button type="submit" className='btn btn-success btnLogin add-user-btn p-2'><span className='fs-3'><FiLogIn/></span>Login</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Login