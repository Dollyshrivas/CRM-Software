import React from "react";
import "./Pages.css";

function About() {
  return (
    <div className="page-container">
      <h1>About Our CRM</h1>
      <p>
        Our CRM application helps businesses manage employees, customer records,
        and workflow efficiently with a modern digital solution.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Easy Management</h3>
          <p>Manage employee records quickly and securely.</p>
        </div>

        <div className="card">
          <h3>Secure System</h3>
          <p>Secure system and eployee management handle task, sales and leads .</p>
        </div>

        <div className="card">
          <h3>Fast Performance</h3>
          <p>Optimized backend APIs for smooth operations.</p>
        </div>
      </div>
    </div>
  );
}

export default About;