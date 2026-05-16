import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <div className="logo">
          CRM<span>App</span>
        </div>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
        )}
      </ul>

      <div className="nav-action-wrapper">
        {!user ? (
          <Link to="/login" onClick={closeMenu}>
            <button className="nav-btn">Login</button>
          </Link>
        ) : (
          <button className="nav-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;