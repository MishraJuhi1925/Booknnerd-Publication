import React from 'react';
import '../assets/css/contact.css';

function Contact() {
  return (
    <>
      <div className="contact-hero">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Contact us with any questions or feedback.</p>
        </div>
      </div>
      {/* <div className="contact-box">
        <h2>📩 Have a Question or Need a Consultation?</h2>
        <p>
          Whether you're an educational institution looking for a trusted exam partner,
          or someone who simply wants to know more — we’re here to help.
        </p>
        <p>
          At <strong>Booknerd Publication LLP</strong>, we welcome all inquiries regarding our services, partnerships, and custom exam solutions.
          If you're looking for a quotation, want to discuss a potential collaboration, or need expert advice on conducting secure and efficient examinations, just reach out.
        </p>
        <h3>💬 Let’s Talk!</h3>
        <p>Fill out the form below or email us directly. Our team will get back to you promptly.</p>
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91-8392813000</p>
          <p><strong>📧 Business Inquiries:</strong> <a href="mailto:booknerdpublication@gmail.com">booknerdpublication@gmail.com</a></p>
          <p><strong>🏢 Office Address:</strong> 3rd floor, P90 South Extension Part 2, Delhi - 110048</p>
        </div>
        <p className="contact-footer">
          We look forward to collaborating with you to make examinations better, smarter, and safer.
        </p>
      </div> */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Side - Information */}
          <div className="contact-info-box">
            <div className="info-header">
              <span className="info-icon">📋</span>
              <h2>Things You Must Remember</h2>
            </div>
            
            <div className="info-content">
              <p className="info-highlight">
                You Are One Step Closer To<br />
                Make Your Education Solutions Better!
              </p>
              
              <ul className="contact-details-list">
                <li>
                  <span className="detail-dot"></span>
                  <div className="detail-content">
                    <h3>Primary Mobile No.</h3>
                    <p>+91-8392813000</p>
                  </div>
                </li>
                
                <li>
                  <span className="detail-dot"></span>
                  <div className="detail-content">
                    <h3>Business Inquiries</h3>
                    <p>booknerdpublication@gmail.com</p>
                  </div>
                </li>
                
                <li>
                  <span className="detail-dot"></span>
                  <div className="detail-content">
                    <h3>Office Address</h3>
                    <p>3rd floor, P90 South Extension Part 2, Delhi - 110048</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Side - Content Box (Instead of Form) */}
          <div className="contact-content-box">
            <div className="content-header">
              <h2>📩 Have a Question or Need a Consultation?</h2>
            </div>
            
            <div className="content-body">
              <p>
                Whether you're an educational institution looking for a trusted exam partner,
                or someone who simply wants to know more — we're here to help.
              </p>
              
              <p>
                At <strong>Booknerd Publication LLP</strong>, we welcome all inquiries regarding our services, 
                partnerships, and custom exam solutions. If you're looking for a quotation, want to discuss 
                a potential collaboration, or need expert advice on conducting secure and efficient examinations, 
                just reach out.
              </p>
              
              <h3>💬 Let's Talk!</h3>
              
              <p>Email us directly. Our team will get back to you promptly.</p>
              
              <div className="contact-info">
                <p><strong>📞 Phone:</strong> +91-8392813000</p>
                <p><strong>📧 Business Inquiries:</strong> <a href="mailto:booknerdpublication@gmail.com">booknerdpublication@gmail.com</a></p>
                <p><strong>🏢 Office Address:</strong> 3rd floor, P90 South Extension Part 2, Delhi - 110048</p>
              </div>
              
              <p className="contact-footer">
                We look forward to collaborating with you to make examinations better, smarter, and safer.
              </p>
            </div>
          </div>
        </div>
        </div>

      <div className="contact-map">
      {/* <iframe
    title="Booknerd Publication LLP Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.9284746141484!2d77.2193352!3d28.570062200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce326a9074c4f%3A0x1bd487951bbcbe92!2sBooknerd%20Publication%20LLP!5e1!3m2!1sen!2sin!4v1744957301241!5m2!1sen!2sin"
   
  ></iframe> */}
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.9284746141484!2d77.2193352!3d28.570062200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce326a9074c4f%3A0x1bd487951bbcbe92!2sBooknerd%20Publication%20LLP!5e1!3m2!1sen!2sin!4v1744965357362!5m2!1sen!2sin" ></iframe>
        
      </div>
    </>
  );
}

export default Contact;

