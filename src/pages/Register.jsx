import React from 'react'
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css"

export default function Register() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <>
    <div className="parent-container-register">
        <form className="register-form-container">
          <div className="closeRegister-cont">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="closeRegisterForm">x</p>
            </NavLink>
          </div>
          <h1>Register</h1>
          <div className="register-username-container">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="register-email-container">
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="register-password-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            ></input>
          </div>
          <button className="registerSubmit" type="submit">
            Sign up
          </button>
          <p className="loginLink">
            Already have an account?
            <span>
              {" "}
              <NavLink to="/login" className="login-nav-link">
                Login now
              </NavLink>
            </span>
          </p>
        </form>
      </div>
    </>
  )
}
