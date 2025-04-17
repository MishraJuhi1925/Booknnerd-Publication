import React from "react";
import "../assets/css/footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section logo-description">
          <img
            src="/images/logo2.PNG"
            alt="Booknerd Logo"
            className="footer-logo"
          />

          <p>
            Booknerd Publication is dedicated to bringing quality content to
            readers worldwide. We specialize in various genres and offer
            professional publishing services.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Inventories */}
        {/* <div className="footer-section inventories">
          <h2>Inventories</h2>
          <ul>
            <li><a href="#">Comming soon...</a></li>
            <li><a href="/journals">Journals</a></li>
            <li><a href="/magazines">Magazines</a></li>
            <li><a href="/manuscripts">Manuscripts</a></li>
          </ul>
        </div> */}

        {/* Column 4: Contact */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <FaPhoneAlt /> &nbsp;<a href="tel:8392813000">8392813000</a>
          </p>
          <p>
            <FaEnvelope /> &nbsp;
            <a href="mailto:booknerdpublication@gmail.com">
              booknerdpublication@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> &nbsp;Address - 3rd floor, P90 South Extension Part 2, Delhi -&nbsp;&nbsp;&nbsp; &nbsp;110048
          </p>

          {/* <div className="socials">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaLinkedinIn /></a>
  </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Booknerd Publication LLP | All
          rights reserved | Proudly serving the education sector with
          innovation, security, and integrity.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
