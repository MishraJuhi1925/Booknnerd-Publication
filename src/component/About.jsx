import React from 'react';
import '../assets/css/about.css';

function About() {
  return (
    <>
      {/* Transparent Hero Section */}
      <div className="contact-hero">
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Learn more about who we are and what we do.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content">
        <p>
          <strong>Booknerd Publication LLP</strong> is a trusted name in the field of examination and educational service delivery. 
          Established with a vision to streamline and secure the entire examination process, we specialize in offering 
          end-to-end exam management solutions — from pre-exam planning and question paper printing to on-screen 
          evaluation and result analytics.
        </p>
        <p>
          With a proven track record, we have proudly worked with esteemed clients such as the CBSE Board, and are 
          recognized under the Start-up India initiative. We also hold an ISO certification, underscoring our 
          commitment to quality, confidentiality, and operational excellence.
        </p>
        <p>
          What sets us apart is our ability to blend technology with accountability — offering high-security 
          services like confidential question paper printing, secure logistics, OMR scanning, and digital evaluation, 
          all under one roof. Whether it's managing lakhs of applications or ensuring timely result delivery, our 
          team delivers with precision, professionalism, and care.
        </p>
        <p>
          Driven by innovation and guided by values, Booknerd Publication LLP continues to be a one-stop solution 
          for academic and recruitment examination services across India.
        </p>
      </div>
    </>
  );
}

export default About;
