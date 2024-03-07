import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Profile.css";
import Nav from "../Nav/Nav";
const Profile = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/editprofile");
    },
  });

  const [name, setName] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const asynccall = async () => {
      let uemail = localStorage.getItem("uemail");
      await axios
        .get(`http://localhost:8080/mainapp/show/${uemail}`)
        .then((res) => {
          setName(res.data.name);
          setUser(res.data);
        });
    };
    const timer = setTimeout(() => {
      asynccall();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [name]);
  const [newName, setNewName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async () => {
    if(newName=="")
    {
      alert("Name cannot be empty"); 
      setShowModal(false) ;
      return;
    }
    user.name = newName;
    const response = await axios.put(
      "http://localhost:8080/mainapp/updatename",user)
    alert("Updated Successfully");
    setName(newName);
    setShowModal(false);
    console.log("Old Name:" + name + "\n New Name:" + newName);
    setNewName("");
  };
  return (
    <div className="profile">
      <Nav />
      <div className="profile-container">
        <div className="p-header">
          <div className="p-text">My Profile</div>
          <div className="underline"></div>
        </div>

        <div className="p-inputs">
          <div className="p-input">
            <span className="sp">Name : {name}</span>
          </div>
          <div className="p-input">
            <span className="sp">Email :{localStorage.getItem("uemail")} </span>
          </div>
        </div>

        <div className="submit-container">
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setShowModal(true)}>
              Update Name
            </Button>
            {showModal && (
           
             <div className='modal-overlay' onClick={(e)=>{
                     if(e.target.className==="modal-overlay")
                     setShowModal(false);}}>
                <div className="modal">
                  <label>Enter new Name: </label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button onClick={handleSubmit}>Save</button>
                </div>
              </div>
            )}

            <Button variant="outlined" component={Link} to="/changepass">
              Change Password
            </Button>
          </Stack>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
export default Profile;
