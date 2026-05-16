import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h2>Manage Your Business Professionally</h2>
          <p>
            CRM platform for managing employees, projects, and customer data efficiently.
          </p>

          <div className="hero-buttons">
      <button className="primary-btn" onClick={() => navigate("/about")}>
        Get Started
      </button>
      <button className="secondary-btn">
        Learn More
      </button>
    </div>
    </div>

        <div className="hero-right">
          <div className="card">
            <h3>Clients</h3>
            <p>120+</p>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <p>48</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>₹8L</p>
          </div>

          <div className="card">
            <h3>Growth</h3>
            <p>32%</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Customer Management</h3>
          <p>Track customer details professionally.</p>
        </div>

        <div className="feature-box">
          <h3>Analytics</h3>
          <p>Business reports and growth tracking.</p>
        </div>

        <div className="feature-box">
          <h3>Security</h3>
          <p>Secure and reliable platform.</p>
        </div>
      </section>
    </div>
  )
}

export default Hero
