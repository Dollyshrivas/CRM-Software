import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>CRM<span>App</span></h2>
          <p>Manage employees and customer data efficiently with our CRM solution.</p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: crmapp@gmail.com</p>
          <p>Phone: +91 9971018840</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CRM App | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;