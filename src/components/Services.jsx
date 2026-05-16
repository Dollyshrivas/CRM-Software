import React from "react";
import "./Pages.css";

function Services() {
  return (
    <div className="page-container">
      <h1>Our Services</h1>

      <div className="card-grid">
        <div className="card">
          <h3>Employee Data</h3>
          <p>employee records.</p>
        </div>

        <div className="card">
          <h3>Data Management</h3>
          <p>Store and retrieve employee data efficiently.</p>
        </div>

        <div className="card">
          <h3>Dashboard Reports</h3>
          <p>Visual business insights and analytics.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;