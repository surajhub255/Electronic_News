import React ,{ useEffect, useState } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Card({details}) {

    const navigate=useNavigate()
    const [news, setNews] = useState([]);

    
  return (
    <div className='card-container'>
        <div className="image-container">
            <img src={details.imgurl} alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>{details.title.substring(0,70)}</h3>
            </div>
            <div className="card-body">
                {details.descr.substring(0,100) + '...'}
            </div>
        </div>
        <div className="btn">
            <button onClick={()=>{
                // setNews();
                // asynccall();
                navigate(`/details/${details.newsid}`);
                
        }}>
                <a>
                    view more
                </a>
            </button>
        </div>
    </div>
  )
}

export default Card