import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const API = "http://localhost:8080/api/register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    try {
      await axios.post(API, user);
      alert("Registration Successful");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
          <p>Already have Account?
          <span onClick={()=>navigator("/login")}>Login</span>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Register;