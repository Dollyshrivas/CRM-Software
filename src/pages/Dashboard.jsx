import React from "react";
import "./Dashboard.css";
import EmployeeCrud from "./EmployCRUD";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Hello, {user?.name}</p>
      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h2>120</h2>
          <p>Total Employees</p>
        </div>

        <div className="card">
          <h2>45</h2>
          <p>Active Clients</p>
        </div>

        <div className="card">
          <h2>18</h2>
          <p>Projects Running</p>
        </div>

        <div className="card">
          <h2>₹85K</h2>
          <p>Monthly Revenue</p>
        </div>

      </div>

      <div className="dashboard-section">
        <h2>Assign Work to emplotes</h2>
        <p>
          <EmployeeCrud />
        </p>
      </div>

      <div className="dashboard-section">
        <h2>To do list</h2>
        <div className="to-do-section">
        <h2>Task</h2>
        <p className="to-do-font">
         Send lead document for inspection
        </p>

      </div>

      <div className="call">
      <div className="to-do-call">
          <h2>Customer enquiry</h2>
        <p className="to-do-font">
         Call to customer
        </p>
      </div>
      </div>

        <div className="to-do-section">
          <h2>Document</h2>
        <p className="to-do-font">
         Update document in customer profile
        </p>
      </div>

      </div>


      <div className="dashboard-section">
        <h2>CRM Overview</h2>
        <p>
          Manage employees, customers, services and project workflows
          professionally through your CRM dashboard.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;