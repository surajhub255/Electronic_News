import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Landing/Landing'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import UserHome from './UserHome/UserHome'
import Details from './Details/Details'
import AdminHome from './Adminhome/Adminhome'
import Profile from './Profile/Profile'
import AddNews from './AddNews/AddNews'
import UpdateNews from './UpdateNews/UpdateNews'
import DeleteNews from './DeleteNews/DeleteNews'
import ChangePass from './ChangePass/ChangePass'
import ViewNews from './ViewNews/ViewNews'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/details/:newsid' element={<Details/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addnews' element={<AddNews/>}/>
        <Route path='/updatenews' element={<UpdateNews/>}/>
        <Route path='/deletenews' element={<DeleteNews/>}/>
        <Route path='/changepass' element={<ChangePass/>}/>
        <Route path='/viewnews' element={<ViewNews/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
