import React from 'react'
import './Model.css'
import { useFormik } from "formik";
import axios from 'axios'
const validate = (values) => {
    const result = {};
    if (!values.srcname) {
      result.srcname = "Please enter the Source";
    }
    else if (values.srcname.length > 1000) {
      result.srcname = "name is too long";
    }
    if (!values.title) {
      result.title = "Please enter valid title";
    }
    if(!values.descr){
      result.descr = "Please enter valid discription";
    }
    if(!values.status){
      result.status = "Please enter the status";
    }
    if(!values.pdate){
      result.pdate = "Please enter the published date";
    }
    if(!values.url){
      result.url = "Please enter the url";
    }
    if(!values.imgurl){
      result.imgurl = "Please enter the image url";
    }
    if(!values.content){
      result.content = "Please enter the content";
    }
    return result;
  };

const Modal = (props) => {
  if(!props.news)
  return null;
    console.log(props.news)
    const formik = useFormik({
        initialValues: {
          srcname: props.news.srcname,
          category: props.news.category,
          title: props.news.title,
          descr: props.news.descr,
          url: props.news.url,
          imgurl: props.news.imgurl,
          content: props.news.content,
          pdate: props.news.pdate,
          status:props.news.status
        },
        validate,
        onSubmit:async (values) => {
          console.log(values)
          await axios.put(`http://localhost:8080/mainapp/updatenews/${props.news.newsid}`,values).then((res)=>{
            if(res.data=="updated successfully"){
              console.log("Successfull")
              alert("Update Successfully")
              props.closeModal();

          }else{
              console.log("Failure");
              alert("Not updated")
          }
          })
        },
      });
     
  return (
    <div className='modal-container' onClick={(e)=>{
        if(e.target.className==="modal-container")
        props.closeModal();}}>
        <div className='modal'>
        


  
    <div className>
      {/* <AdminNav />  */}
      <div className>
        <h1 className>Update News</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="srcname">Source:</label>
          <input
            type="text"
            name="srcname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.srcname}
           
          />
          {formik.touched.srcname&&formik.errors.srcname?<div>{formik.errors.srcname}</div>:null}
       
          <br />

          <label htmlFor="category">Category:</label>

          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Buisness">Buisness</option>
            <option value="Sport">Sport</option>
            <option value="Geo politics">Geo politics</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}

          <br />

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
           
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
          <br />

          <label htmlFor="descr">description:</label>
          <input
            type="text"
            name="descr"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.descr}
          />
          {formik.touched.descr && formik.errors.descr ? (
            <div>{formik.errors.descr}</div>
          ) : null}
          <br />

          <label htmlFor="pdate">Published Date:</label>
          <input
            type="date"
            name="pdate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pdate}
          />
           {formik.touched.pdate && formik.errors.pdate ? (
            <div>{formik.errors.pdate}</div>
          ) : null}
          <br />

          <label htmlFor="url">URL:</label>
          <input
            type="text"
            name="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
          {formik.touched.url && formik.errors.url ? (
            <div>{formik.errors.url}</div>
          ) : null}
          <br />

          <label htmlFor="imgurl">Image URL:</label>
          <input
            type="text"
            name="imgurl"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgurl}
          />
          {formik.touched.imgurl && formik.errors.imgurl ? (
            <div>{formik.errors.imgurl}</div>
          ) : null}
          <br />

          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            id=""
            cols="30"
            rows="10"
          ></textarea>

          {formik.touched.content && formik.errors.content ? (
            <div>{formik.errors.content}</div>
          ) : null}
          <br />
          <label htmlFor="status">Status:</label>

          <select
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          {formik.touched.status && formik.errors.status ? (
            <div>{formik.errors.status}</div>
          ) : null}

          <br />
          <div >
            <button type="submit">Update News</button>
          </div>
        </form>
      </div>
    </div></div>
       </div>
  )
}

export default Modal