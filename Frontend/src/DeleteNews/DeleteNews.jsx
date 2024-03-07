import './DeleteNews.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../Model/Model';
import React,{ useState,useEffect } from 'react';
import axios from 'axios'
import AdminNav from '../AdminNav/AdminNav';

const DeleteNews = ()=> {
  const[news,setNews]=useState([])
  const[data,setData]=useState(false)

  const handleDeleteNews=(newsid)=>{
    const asynccall1 = async () => {
    await axios.delete(`http://localhost:8080/mainapp/deletenews/${newsid}`)
  
  };asynccall1();
  }
  useEffect(() => {
    const asynccall = async () => {
      await axios.get("http://localhost:8080/mainapp/showall").then((res) => {
        setNews(res.data);
        setData(true);
      });
    };
    
    const timer = setTimeout(() => {
      asynccall();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [news]);
  const[modalOpen,setModalOpen]=useState(false);
  const[selectedNews,setSelectedNews]=useState(null);
  const openEditModal=(n)=>{
    setSelectedNews(n);
    setModalOpen(true);
  }
  const closeModal=()=>{
    setSelectedNews(null);
    setModalOpen(false);
  }
  if(data)
  return (
    <div>
      <AdminNav/>
    <div className='delete'>
      <div className="table-wrapper">
      <table className='table'>
      <thead>
        <tr>
          <th className='expand'>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead> 
      <tbody>
        {news.map((n,idx)=>{
          return(

        <tr key={idx}>
          
          <td className='expand'>{n.title}</td>
          <td className={`label label-${n.status}`}>{n.status}</td>
          <td>
            <span className='actions'>
             <DeleteIcon className='delete-btn' onClick={()=>handleDeleteNews(n.newsid)}/>
             <EditIcon onClick={()=>openEditModal(n)} />
             
            </span>
          </td>
</tr>)})}
      {modalOpen&&<Modal  news={selectedNews} closeModal={closeModal}/>}
      </tbody>
      </table>
      </div>
      </div>
      </div>
          )
    else{
      return(
        <div className='alternate'>Loading....</div>
      )
    }
}

export default DeleteNews