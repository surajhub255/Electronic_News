import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import "./UserHome.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const UserHome = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  // const [pdate, setPdate] = useState("");

 
  // const asynccall = async () => {
  //   if (category == "" && pdate ==""){
  //     await axios.get("http://localhost:8080/mainapp/showall/active").then((res) => {
  //     setNews(res.data);
  //     });
  //   }else if(pdate == "" && category.length>0) {
  //     await axios.get(`http://localhost:8080/mainapp/show/category/${category}`).then((res) => {
  //     setNews(res.data);
  //     });
  //   }else {
  //     await axios.get(`http://localhost:8080/mainapp/show/category/${category}/${pdate}`).then((res)=>{
  //       setNews(res.data);
  //     });
  //   }
    
  // };

  const asynccall = async () => {
    if (category == "" ){
      await axios.get("http://localhost:8080/mainapp/showall/active").then((res) => {
      setNews(res.data);
      });
    }else {
      await axios.get(`http://localhost:8080/mainapp/show/category/${category}`).then((res) => {
      setNews(res.data);
      });
    }
    
  };

  useEffect(() => {

    const asynccall = async () => {
      if (category == "" ){
        await axios.get("http://localhost:8080/mainapp/showall/active").then((res) => {
        setNews(res.data);
        });
      }else {
        await axios.get(`http://localhost:8080/mainapp/show/category/${category}`).then((res) => {
        setNews(res.data);
        });
      }
      
    };
   
    const timer = setTimeout(() => {
      asynccall();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [news]);

  return (
    <div>
      <Nav />

      <div className="home">
        <div className="left">
          <h3 className="side-head">Category</h3>
          <ul className="ul">
            <li  onClick={()=>{  setCategory("Technology");asynccall();}}>Technology</li>
            <li onClick={()=>{ setCategory("Science");asynccall(); }}>Science</li>
            <li onClick={()=>{ setCategory("buisness");asynccall(); }}>Bussiness</li>
            <li onClick={()=>{ setCategory("Sport");asynccall(); }}>Sports</li>
            <li onClick={()=>{ setCategory("Geo Politics");asynccall(); }}>Geo Politics</li>
            {/* <input type='date' name="pdate" onChange={handleChange} value={pdate}> </input>  */}
            {/* <input type="date" value={pdate} onChange={(e)=>setPdate(e.target.value)} />
            <button onClick={()=>{
                asynccall()
            }}>Apply</button> */}
          </ul>
        </div>

        <div className="mid">

          <div className="mid1">
            {news.map((n) => (
              <div className="Card">
                <Card details={n} />
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default UserHome;


