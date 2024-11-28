import React from 'react'
import "./Navbar.css"
import ciitlogo from "../images/ciit-logo.png"
import {NavLink, Link} from "react-router-dom"

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img src={ciitlogo} alt="logo" className='logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className='link' to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link className='link' to="/catalog"><a class="nav-link active" href="#">Browse Catalog</a></Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Library Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Artwork Scanning Services</a></li>
            <li><a class="dropdown-item" href="#">Screen Calibration Services</a></li>
            <li><a class="dropdown-item" href="#">Library Cubicle Reservation</a></li>
            <li><a class="dropdown-item" href="#">Borrow a Book</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            E-Resources
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">EBSCO Database</a></li>
            <li><a class="dropdown-item" href="#">CCP EPA</a></li>
            <li><a class="dropdown-item" href="#">Philippine E-journals</a></li>
          </ul>
        </li>
        <li class="nav-item">
                <NavLink to="/login">
                  <button type="button" class="btn login">LOGIN</button>
                </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
