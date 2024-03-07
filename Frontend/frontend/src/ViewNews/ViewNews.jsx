import React,{useState,useEffect} from 'react'
import axios from "axios";
import AdminNav from '../AdminNav/AdminNav';
const ViewNews = () => {
 
const [views,setViews]=useState([])
useEffect(() => {
  const asynccall = async () => {
    await axios.get("http://localhost:8080/mainapp/viewcountbycategory").then((res) => {
      setViews(res.data);
    });
  };
  const timer = setTimeout(() => {
    asynccall();
  }, 3000);
  return () => {
    clearTimeout(timer);
  };
}, [views]);
 
  return (
    <div>
      <AdminNav/>
    <div className='delete'>
      <div className="table-wrapper">
      <table className='table'>
      <thead>
        <tr>
          <th className='expand'>Category</th>
          <th>Total Views</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <td>Business</td>
          <td>
            <span className='actions'>
              {views[0]}
            </span>
          </td></tr>
          <tr>
          <td>GeoPolitics</td>
          <td>
            <span className='actions'>
              {views[1]}
            </span>
          </td></tr>
          <tr>
          <td>Science</td>
          <td>
            <span className='actions'>
              {views[2]}
            </span>
          </td></tr>
          <tr>
          <td>Sports</td>
          <td>
            <span className='actions'>
              {views[3]}
            </span>
          </td></tr>
          <tr>
          <td>Technology</td>
          <td>
            <span className='actions'>
              {views[4]}
            </span>
          </td></tr>    
      </tbody>
      </table>
      </div>
 
      </div>
      </div>
  )
}
 
export default ViewNews