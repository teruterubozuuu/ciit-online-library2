import React, { useState } from 'react';
import "../component/FeaturedBooks.css"
import fb1 from "../images/fb1.jpg"
import fb2 from "../images/fb2.jpg"
import fb3 from "../images/fb3.jpg"
import fb4 from "../images/fb4.jpg"
import fb5 from "../images/fb5.jpg"
import fb6 from "../images/fb6.jpg"

export default function FeaturedBooks() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {fb1},
        {fb2},
        {fb3},
        {fb4},{fb5}, {fb6}
      ];
    // Next slide function
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Previous slide function
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
  return (
    <div className="slider-container">
    <button className="prev" onClick={prevSlide}>
      &#10094;
    </button>
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
    <button className="next" onClick={nextSlide}>
      &#10095;
    </button>
  </div>
  )
}
