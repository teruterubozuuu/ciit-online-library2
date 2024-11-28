import React from 'react'
import "./Header.css"
import librarybg from '../images/library-bg.png';
import ciitlib_logo from '../images/ciit-library-logo.png';
import {useState} from 'react'

export default function Header() {
  const [search,setSearch] = useState("")
  return (
    <>
     <div className="library-header-parent">
        <img src={librarybg} alt="library background" className="library-bg" />
        <div className="library-header-child">
          <img src={ciitlib_logo} alt="ciit library logo" className="ciit-library-logo" />
          <div className="search-bar-cont">
            <i className="bi bi-search"></i>
            <input type="text" className="search-bar" value={search} onChange={e=>setSearch(e.target.value)}/>
          </div>
        </div>
      </div>
      </>
  )
}
