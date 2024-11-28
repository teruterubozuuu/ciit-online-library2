import React from 'react';
import './Home.css';
import fb1 from "../images/fb1.jpg"
import fb2 from "../images/fb2.jpg"
import fb3 from "../images/fb3.jpg"
import fb4 from "../images/fb4.jpg"
import fb5 from "../images/fb5.jpg"
import book1 from "../images/book1.jpg"
import book2 from "../images/book2.jpg"
import book3 from "../images/book3.jpg"
import book4 from "../images/book4.jpg"
import book5 from "../images/book5.jpg"

export default function Home() {
  return (
    <div className="home-parent-container">
      <div className='home-content-parent'>
        <h2 style={{marginBottom:"30px"}} >FEATURED BOOKS</h2>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <img src={fb1} alt="fb" className='fb-covers'/>
          <img src={fb2} alt="fb" className='fb-covers'/>
          <img src={fb3} alt="fb" className='fb-covers'/>
          <img src={fb4} alt="fb" className='fb-covers'/>
          <img src={fb5} alt="fb" className='fb-covers'/>
        </div>
        <h2 style={{marginTop:"50px", marginBottom:"30px"}}>TOP RATED BOOKS</h2>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <img src={book1} alt="fb" className='fb-covers'/>
          <img src={book2} alt="fb" className='fb-covers'/>
          <img src={book3} alt="fb" className='fb-covers'/>
          <img src={book4} alt="fb" className='fb-covers'/>
          <img src={book5} alt="fb" className='fb-covers'/>
        </div>
      </div>
    </div>
  );
}
