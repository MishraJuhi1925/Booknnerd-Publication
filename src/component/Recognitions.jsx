
import React from 'react';
import '../assets/css/recognitions.css';

function Recognitions() {
  // return (
  //   <div className="recognitions-container">
  //     <div className="recognitions-content">
        
       
  //       <h2 style={{marginTop: "-8px"}}>🎯 Our Mission</h2>
  //       <div className="mission-box">
         
  //         <p>
  //           At Booknerd Publication LLP, our mission is to deliver examinations that are secure,
  //           transparent, and future-ready. We believe that trust and technology should go hand in
  //           hand — which is why our services focus on not just managing exams, but elevating the
  //           entire examination ecosystem. Through our robust security protocols and advanced
  //           analytics, we create trustworthy, efficient, and forward-thinking examination systems.
  //         </p>
  //       </div>

  //       <h2>Our Certifications</h2>
  //        <div className="recognitions-grid">
  //         <div className="recognition-card simple-card">
  //           <h3>Organizations That Entrusted Us
  //           </h3>
  //           <img src="/images/1.jpg" alt="CBSE Board" className="logo-img" />
  //         </div>

  //         <div className="recognition-card simple-card">
  //           <h3>Start-Up India Certified</h3>
  //           <img src="/images/strar.jpg" alt="Start-Up India" className="logo-img" />
  //         </div>

  //         <div className="recognition-card simple-card">
  //           <h3>ISO Certification</h3>
  //           <img src="/images/iso.jpg" alt="ISO Certified" className="logo-img" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="recognitions-container">
      <div className="recognitions-content">

        {/* 🎯 Our Mission */}
        <h2 style={{ marginTop: "-8px" }}>🎯 Our Mission</h2>
        <div className="mission-box">
          <p>
            At Booknerd Publication LLP, our mission is to deliver examinations that are secure,
            transparent, and future-ready. We believe that trust and technology should go hand in
            hand — which is why our services focus on not just managing exams, but elevating the
            entire examination ecosystem. Through our robust security protocols and advanced
            analytics, we create trustworthy, efficient, and forward-thinking examination systems.
          </p>
        </div>

        {/* 🏢 Organizations That Entrusted Us */}
        <h2>Organizations That Entrusted Us</h2>
        <div className="recognitions-grid">
  <div className="recognition-card simple-card cbse-highlight">
    {/*   <h4>CBSE BOARD</h4> */}
    <img src="/images/1.jpg" alt="CBSE Board" className="logo-img" />
  </div>
</div>

        <h2>Our Certifications</h2>
        <div className="recognitions-grid">
        <div className="recognition-card simple-card">
            {/* <h3>Start-Up India Certified</h3> */}
            <img src="/images/strar.jpg" alt="Start-Up India" className="logo-img" />
          </div>
          <div className="recognition-card simple-card">
            {/* <h3>ISO Certification</h3> */}
            <img src="/images/iso.jpg" alt="ISO Certified" className="logo-img" />
          </div>
          <div className="recognition-card simple-card">
            {/* <h3>ISO Certification</h3> */}
            <img src="/images/cmmi.jpg" alt="ISO Certified" className="logo-img" />
          </div>
        </div>

      </div>
    </div>
  );

}

export default Recognitions;
