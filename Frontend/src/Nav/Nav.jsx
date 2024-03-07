import React from "react";
import "./Nav.css";
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate=useNavigate()

  return (
    <div className="NewNav">
    <ul>
        <li><a className="home" onClick={()=>navigate('/userhome')}>Home</a></li>
        <li><a className="prof" onClick={()=>navigate('/profile')}>Profile</a></li>
        <li className="logout" onClick={()=>navigate('/login')}><a>Logout</a></li>
    </ul>
   </div>
  );
};

export default Nav;
