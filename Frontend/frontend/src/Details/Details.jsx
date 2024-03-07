import React, { useEffect, useState }  from 'react'
import Nav from '../Nav/Nav'
import './Details.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = (props) => {

  const [news, setNews] = useState([]);
  const {newsid} = useParams();
  const [gotData,setGotData] = useState(false);


  useEffect(() => {

    // const newsid = 302;

    const asynccall = async () => {
      // await axios.put(`http://localhost:8080/mainapp/updatenewsview/${newsid}`)
      await axios.get(`http://localhost:8080/mainapp/show/newsbyid/${newsid}`).then((res) => {
        setNews(res.data);
        if(gotData == false){
          const resp = axios.put(`http://localhost:8080/mainapp/updatenewsview/${newsid}`)
          setGotData(true);
        }
        
      }).then(()=>{
        if(gotData){
          
          console.log(gotData);                  
            }
        
      });
    };
    const timer = setTimeout(() => {
      asynccall();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [news]);

    return (
        <div className='yo'>
          <div>
            <Nav/>
          </div>
        <div className='boom'>
          <div className='headline-wrapper'>
            <h1 >{news.title}</h1>
          </div>
          <div className='image-wrapper'>
            <img  src={news.imgurl} height={300} width={600}/>
            <p>Source : {news.srcname} <span>{news.pdate}</span> </p>
           
          </div>
          <div className='content-wrapper'>
            <p>{news.content}</p>
          </div> 
          <div className='link-wrapper'>
            <p><a href={news.url}>read more</a></p>
          </div>
        </div>
        </div>
      )
}

export default Details