import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const onlogindata = (b) => {
    localStorage.setItem("uemail", b);
    console.log(localStorage);
  };
  const formik = useFormik({
    initialValues: {
      uemail: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let b = values.uemail;
      await axios
        .post("http://localhost:8080/mainapp/login", values)
        .then((res) => {
          console.log(res.data);
          if (res.data == "User") {
            onlogindata(b);
            navigate("/userhome");
          } else if (res.data == "Admin") {
            navigate("/adminhome");
          } else {
            navigate("/login");
            alert("Enter the correct password")
          }
        });
    },
  });
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <br />
      <form action="post" onSubmit={formik.handleSubmit}>
        <div className="inputs">
          <div className="input">
            {/* <label htmlFor="email" >Enter email-id:</label> */}
            <EmailIcon className="img" />
            <input
              type="email"
              name="uemail"
              placeholder="uemail id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.uemail}
            />
            {formik.touched.uemail && formik.errors.uemail ? (
              <div>{formik.errors.uemail}</div>
            ) : null}
            <br />
          </div>
          <br />
          <div className="input">
            {/* <label htmlFor="password" >Enter password:</label> */}
            <KeyIcon className="img" />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />{" "}
            <br />
            <br />
          </div>

          <div className="submit-container-login">
            <div>
              <button type="submit" className="submit">
                Login
              </button>
            </div>
            <div>
              <button
                className="submit"
                type="submit"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
