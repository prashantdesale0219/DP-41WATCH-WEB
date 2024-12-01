import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const [email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const handleclick=(e)=>{
      e.preventDefault()
      console.log(email,password)
      createUserWithEmailAndPassword(auth,email, password)
      .then((res)=>{
        toast.success("YOUR ACCOUNT CREATED SUCCESFULLY...!🥰", {
          position: "top-center",  // Changed to a string
          autoClose: 4000,
        });
      })
      .catch((err)=>{
        console.log(err)
        toast.error("SOMETHING WENT WRONG...!😒", {
          position: "top-center",  // Changed to a string
          autoClose: 4000,
        });
      })

  }

  return (
    <div >
      <div style={{border:"1px solid gray",height:"400px",width:"100%",textAlign:"center",paddingTop:"6%"}}>
              <form action="" onSubmit={(e)=>handleclick(e)}>
              <h5 >CREATE ACCOUNT</h5><br />
              <p>Please enter your email address to create an account.</p>
                <input type="text" placeholder='EMAIL ADDRESS' onChange={(e)=>setemail(e.target.value)} style={{border:"none",width:"400px"}}/> <br /><br />
                <input type="password" placeholder='PASSWORD' onChange={(e)=>setpassword(e.target.value)} style={{border:"none",width:"400px"}}/> <br /><br />
                <input type="submit" style={{height:"50px",width:"120px" }}className='btn btn-outline-success'/>
              </form>
  
            </div>
            <ToastContainer /> 
    </div>
  )
}

export default Signup
