import React from "react";
import './ChangePass.css'
import {useFormik} from 'formik';
import KeyIcon from '@mui/icons-material/Key';
import Nav from "../Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const validate=(values)=>{
    const result={};
    if(!values.oldpass){
        result.oldpass="Please enter old password"
      }
    const reg2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$/
    if(!reg2.test(values.newpass)){
        result.newpass="please enter Password in correct format"
       }
    if(!values.confpass){
      result.confpass="enter again password"
    }
    if(values.confpass!==values.newpass){
        result.confpass="it should be same as password"
    }   return result;
}
const ChangePass=()=>{

    const navigate=useNavigate()
    
    const formik=useFormik({
        initialValues:{
            oldpass:'',
            newpass:'',
            confpass:''
        },validate,onSubmit:async(values)=>{
            console.log(values);
            const obj = {
                oldpass:values.oldpass,
                newpass:values.newpass,
                uemail:localStorage.getItem("uemail")
            }
            console.log(obj);
            await axios.put("http://localhost:8080/mainapp/updatepass",obj).then((res)=>{
                
                if(res.data == "Updated successfully"){
                    alert("Updated Successfully")
                    navigate("/login");
                }else{
                    alert("Enter correct password")
                }
            })
             
        }
    })
    return(
        <div>
            <Nav/>
        <div className="container">
        <div className="header">
            <div className="text">Change Password</div>
            <div className="underline"></div>
        </div>
        <br/>
        <form action="put" onSubmit={formik.handleSubmit}>
            <div className="inputs">
                <div className="input">
                     
                    <KeyIcon className='img'/>
                    <input type="password" name="oldpass"  placeholder="Old Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.oldpass}/>
                    {formik.touched.oldpass&&formik.errors.oldpass?<div>{formik.errors.oldpass}</div>:null}
                    <br/>
                </div>
                <br/>
                <div className="input">
                    {/* <label htmlFor="password" >Enter password:</label> */}
                    <KeyIcon className='img'/>
                    <input type="password" name="newpass" placeholder="New Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newpass}/>
                    {formik.touched.newpass&&formik.errors.newpass?<div>{formik.errors.newpass}</div>:null} <br />
                    <br/>
                </div>
                <br />
                <div className="input">
                    {/* <label htmlFor="password" >Enter password:</label> */}
                    <KeyIcon className='img'/>
                    <input type="password" name="confpass" placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confpass}/>  
                    {formik.touched.confpass&&formik.errors.confpass?<div>{formik.errors.confpass}</div>:null} <br /><br />
                    <br/>
                </div>
         
                <div className="submit-container-login">
                    <div >
                        <button type="submit" className='submit'  >Change Password</button>
                    </div>
                     
                </div>
            </div>
        
        </form>
    </div>
    </div>
    )
}
export default ChangePass