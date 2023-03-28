import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import axios from "axios"
function Register() {

    //navigate hook
    let navigate=useNavigate()

    let { register, handleSubmit, formState: { errors } } = useForm();
    let [selectedFile, setSelectedFile] = useState(null)
    let [err, setErr] = useState("")
    let addNewUser = (newUser) => {
        //save newUser in json-server by making HTTP POST request


        let fd = new FormData();
        //append newUser to form data
        fd.append("user", JSON.stringify(newUser))
        //append selected file to form data
        fd.append("photo", selectedFile)


        axios.post("http://localhost:5500/user-api/register",fd)
        .then(response=>{
          console.log(response)
          if(response.status===201){
            //navigate to login component
            navigate("/login")
          }
          if(response.status!==201){
            setErr(response.data.message)
          }
        })
        .catch(err=>{
          //the client was given an error response {4xx,5xx}
          if(err.response){
            setErr(err.message)
          }
          //the client received a response and the request was never left
          else if(err.request){
            setErr(err.message)
          }
          //other errors
          else{
            setErr(err.message)
          }

        })
    }


    //on file select
    const onFileSelect = (e) => {
        setSelectedFile(e.target.files[0])
    }


    return (
        <div className='add-user bg-opacity-50'>
            <p className="display-2  fw-bolder text-center">Register</p>
            {/*responsive form */}



            {/* //HTTP err message */}
            {err.length != 0 && <p className='display-3 fw-bold text-center text-danger'>{err}</p>}


            <div className="col-11 col-sm-8 col-md-6 mx-auto p-3 registerForm">
                <form onSubmit={handleSubmit(addNewUser)} action="">
                    <div className="mb-3 form-floating">
                        <input type="text" name="" id="username" className='form-control' placeholder='hi' {...register("username", { required: true })} />
                        <label htmlFor="username">Name  </label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="email" name="" id="email" className='form-control' placeholder='hi' {...register("email", { required: true })} />
                        <label htmlFor="email">Email  </label>
                    </div>
                    {errors.name?.type === "required" && <p className='text-danger fw-bold'>*Name is required</p>}
                    <div className="mb-3 form-floating">
                        <input className='form-control' type="password" name="password" id="password" placeholder='hi' {...register("password", { required: true })} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input className='form-control' type="password" name="Confirm_password" id="Confirm_password" placeholder='hi' {...register("Confirm_password", { required: true })} />
                        <label htmlFor="Confirm_password">Confirm Password</label>
                    </div>
                    {errors.email?.type === "required" && <p className='text-danger fw-bold'>*Email is required</p>}

                    <div className="mb-3">
                        <label htmlFor="dob">DOB  </label>
                        <input type="date" name="" id="dob" className='form-control' {...register("DOB", { required: true })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city">City  </label>
                        <input type="text" name="city" id="city" className='form-control' {...register("city", { required: true })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phonenumber">Mobile Number  </label>
                        <input type="text" name="phonenumber" id="phonenumber" className='form-control' {...register("phonenumber", { required: true })} />
                    </div>
                    {errors.DOB?.type === "required" && <p className='text-danger fw-bold'>*DOB is required</p>}
                    <div className="mb-3">
                        <label htmlFor="image">Select profile pic</label>
                        <input type="file" name="" id="image" className='form-control' {...register("Image", { required: true })} onInput={onFileSelect} />
                    </div>
                    {errors.Image?.type === "required" && <p className='text-danger fw-bold'>*Image is required</p>}

                    {/* submit button */}
                    <button type="submit" className=' add-user-btn p-2'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register