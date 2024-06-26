import React from "react";
import '../style/footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <h1>
          {" "}
          Mohsin
        </h1>
      </div>
      <hr />
      <div className="footer_container">
        <div className="line">
          <h3>Our Community</h3>
          <ul>
            <li>Mern developers</li>
            <li>Full stack developers</li>
          </ul>
        </div>
<div className="lin1">
        <div className="line">
          <h3>Collaborate with me</h3>
          <ul>
            <li>03-xxxxxxx</li>
            <li>ranamohsin4520@gmail.com</li>
          </ul>
        </div>

        <div className="line">
          <h3>Social</h3>
          <div className="links">
            <FaFacebook size={23} />
            <FaInstagram size={23} />
            <FaTwitter size={23} />
            <FaLinkedin size={23} />
          </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="end">2024 Mohsin | All rights reserved</p>
    </footer>
  );
};

export default Footer;
