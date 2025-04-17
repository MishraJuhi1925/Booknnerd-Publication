import React from 'react';
import '../assets/css/contact.css';

function Contact() {
  return (
    <>
      {/* Transparent Hero Section */}
      <div className="contact-hero">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Contact us with any questions or feedback.</p>
        </div>
      </div>

      {/* Floating Contact Box */}
      <div className="contact-box">
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
          <p><strong>🏢 Office Address:</strong> A-123, Tech Park Road, New Delhi</p>
        </div>
        <p className="contact-footer">
          We look forward to collaborating with you to make examinations better, smarter, and safer.
        </p>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe
          title="office-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.34234921287!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e36ef6d4a5%3A0x845418f8ad93f9b0!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1713282317023!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
