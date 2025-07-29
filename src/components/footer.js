import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section mt-2">
      <div className="footer-top">
        <div className="footer-col brand">
          <h2 className="logo"><span>Shop</span>Pilot</h2>
          <p>
          We're here to help you express your unique style with handpicked fashion pieces that make a statement.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
             <li>Kids</li>
            <li>Boys</li>
            <li>Girls</li>
            <li>Men</li>
            <li>Women</li> 
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>123 Travel Street, City, Country</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> info@ShopPilot.com</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ShopPilot. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
