import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Landing.css'

const Landing = ()=>{

    const navigate = useNavigate()
    
    return(
        <div className="container-landing">
        <div className="header-landing">
            <div className="text">Welcome to e-Gazette</div>
            <div className="underline"></div>
        </div>
        
            
         
       <div className="landing-container-button">
          <div>
            <button className='click' onClick={()=>{navigate('/login')}}>Login</button> 
         </div><div>
            <button className='click' onClick={()=>{navigate('/signup')}}>Sign Up</button>
           </div>
            </div>
        </div>
       
    )
}
export default Landing