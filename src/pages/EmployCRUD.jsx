import React, { useEffect, useState } from "react";
import "./EmployCRUD.css";
import axios from "axios";

function EmployeeCrud() {
  const API = "http://localhost:8080/api/employ";

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load Employees
  const loadEmployees = async () => {
    try {
      const response = await axios.get(API);
      setEmployees(response.data);
    } catch (error) {
      console.error("GET Error:", error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Add or Update Employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    const employee = {
      name: name,
      email: email,
    };

    try {
      if (editingId !== null) {
        await axios.put(`${API}/${editingId}`, employee);
        setEditingId(null);
      } else {
        await axios.post(API, employee);
      }

      setName("");
      setEmail("");
      loadEmployees();

    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  // Delete Employee
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      loadEmployees();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // Edit Employee
  const editEmployee = (emp) => {
    setEditingId(emp.id);
    setName(emp.name);
    setEmail(emp.email);
  };

  return (
    <div className="crud-container">
      <h2>Employee CRUD</h2>

      <form className="crud-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>
                  <button onClick={() => editEmployee(emp)}>Edit</button>
                  <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeCrud;