import React from 'react';
import '../assets/css/about.css';

function About() {
  return (
    <>
      <div className="contact-hero">
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Learn more about who we are and what we do.</p>
        </div>
      </div>
      <div className="about-content">
        <p>
          <strong>Booknerd Publication LLP</strong> is a trusted name in the field of examination and educational service delivery. 
          Established with a vision to streamline and secure the entire examination process, we specialize in offering 
          end-to-end exam management solutions — from pre-exam planning and question paper printing to on-screen 
          evaluation and result analytics.
        </p>
        <p>
        With a strong legacy of excellence, we are proud to have collaborated with prestigious clients such as the CBSE Board. Our recognition under <b>  the Start-up India initiative, ISO certification, and CMMI Level 3 accreditation </b> stand as a testament to our unwavering commitment to quality, data confidentiality, and process maturity. These achievements reinforce our position as a trusted leader in the examination and assessment services domain.
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
