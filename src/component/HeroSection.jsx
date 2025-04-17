// import React from 'react'
// import '../assets/css/hero.css'

// function HeroSection() {
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <h1>End-to-End Examination Services</h1>
//         <p>Reliable, Secure, and Efficient Solutions for Your Examination Needs</p>
//         <button className="cta-button">
//           <a href="#about">About <span className="arrow">→</span></a>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default HeroSection


import React from 'react';
import '../assets/css/hero.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src ='images/b.jpg'/>
      <div className="hero-overlay"></div>
      <div className="hero-contents">
        <h1>End-to-End Examination Services</h1>
        <p>Reliable, Secure, and Efficient Solutions for Your Examination Needs</p>
        <Link to="/about" className="cta-button">
          About <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;



// import React from "react";
// import "../assets/css/hero.css";
// import { Link } from "react-router-dom";

// function HeroSection() {
//   return (
//     <div className="hero-container">
//       <div className="hero-image-wrapper">
//         <img
//           src="/images/hero-image.jpg"
//           alt="Booknerd Publication LLP - End-to-End Examination Services"
//           className="hero-image"
//         />
//       </div>
//       <div className="hero-content">
       
//         {/* <button className="cta-button">  */}
//           <Link to="/about" className="cta-button">
//             About <span className="arrow">→</span>
//           </Link>
//         {/* </button> */}
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
