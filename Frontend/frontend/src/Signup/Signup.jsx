import React from "react"
import {useFormik} from "formik"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import './Signup.css'
import axios from 'axios'

import { useNavigate } from "react-router-dom";
 const validate=(values)=>{
    const result={};
    if(!values.name){
        result.name="please enter your name"
    }

    else if(values.name.length>15) {
        result.name="name is too long"
      }
    const reg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
    if(!reg.test(values.uemail)){
        result.uemail="please enter valid uemail-id"
    }
    const reg2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$/
    if(!reg2.test(values.password)){
        result.password="please enter password"
       }
    
    if(!values.confirmpass){
      result.confirmpass="enter again password"
    }
    if(values.confirmpass!==values.password){
        result.confirmpass="it should be same as password"
    }   return result;
 }


const Signup=()=>{
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            name:"",
            uemail:"",
            password:"",
            confirmpass:""
        },validate,       
        onSubmit:async(values)=>{
            console.log(values);
            await axios.post("http://localhost:8080/mainapp/signup",values).then((res)=>{
                if(res.data=="Reg successfuly"){
                    navigate("/login");
                }else{
                    console.log("Error");
                }
            })
            
        }
    })
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
       <form action= "post" onSubmit={formik.handleSubmit}>
        <div className="inputs">
            <div className="input">
        {/* <label htmlFor="name" >Name:</label> */}
        <AccountCircleIcon className="img"/>
        <input type="text" name="name" placeholder="Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} required/>
        {formik.touched.name&&formik.errors.name?<div>{formik.errors.name}</div>:null}<br/></div>
        <div className="input">
        {/* <label htmlFor="uemail" >uemail-id:</label> */}
        <EmailIcon className="img"/>
        <input type="email" name="uemail" placeholder="Email id" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.uemail} required/>
        {formik.touched.uemail&&formik.errors.uemail?<div>{formik.errors.uemail}</div>:null}<br/></div>
        <div className="input">
        {/* <label htmlFor="password">password:</label> */}
        <KeyIcon className="img"/>
        <input type="password" id="password" name="password" placeholder="password"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}required/><br/>
        {formik.touched.password&&formik.errors.password?<div>{formik.errors.password}</div>:null}</div>
        <div className="input">
        {/* <label htmlFor="confirmpass" > Confirm password:</label> */}
        <KeyIcon className="img"/>
        <input type="password" name="confirmpass" placeholder="Confirm password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpass}/>
        {formik.touched.confirmpass&&formik.errors.confirmpass?<div>{formik.errors.confirmpass}</div>:null}<br/></div>
        </div>
        <div className="submit-container">
            <button type="submit" className="submit">Signup</button>
        </div>
         </form>
         </div>
    )
}
export default Signup