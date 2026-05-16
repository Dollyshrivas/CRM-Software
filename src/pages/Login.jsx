import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const API = "http://localhost:8080/api/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(API, user);

      alert("Login Successful ✅");

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/dashboard");

      setEmail("");
      setPassword("");

    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>Don't have Account?
          <span onClick={()=>navigate("/register")}>Register</span>
        </p>
      </form>
    </div>
  );
}

export default Login;