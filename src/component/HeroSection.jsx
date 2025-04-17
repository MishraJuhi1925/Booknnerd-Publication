
import React from 'react';
import '../assets/css/hero.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src ='images/2.png'/>
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
