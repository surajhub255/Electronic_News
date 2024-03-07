import React from 'react'
import './AdminNav.css'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const navigate=useNavigate()

    return (
      <div className="NewNav">
      <ul>
          <li><a className="home" onClick={()=>navigate('/adminhome')}>Home</a></li>
          <li className="logout" onClick={()=>navigate('/login')}><a>Logout</a></li>
      </ul>
     </div>
    );
}

export default AdminNav