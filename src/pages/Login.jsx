import React from 'react'
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login() {
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
    <div className="parent-container-login">
      <form className="form-container">
        <div className="closeLogin-cont">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p className="closeLoginForm">x</p>
          </NavLink>
        </div>
        <h1>Login</h1>
        {error && <p style={{ color: "red", fontSize:"1rem" , marginBottom:"-20px"}}>{error}</p>}
        {success && <p style={{ color: "green", fontSize:"1rem" , marginBottom:"-20px"}}>{success}</p>}
        <div className="login-email-container">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="login-password-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
        <button className="loginSubmit" type="submit">
          Login
        </button>
        <p className="registerLink">
          Don't have an account?
          <span>
            {" "}
            <NavLink to="/register" className="register-nav-link">
              Register now
            </NavLink>
          </span>
        </p>
      </form>
    </div>
  )
}
