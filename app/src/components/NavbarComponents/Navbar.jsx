import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/moon.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={theme ? "navbar light-theme" : "navbar dark-theme"}>
      <div className="container">
        <button onClick={changeTheme} className="logo-button">
          <img className="logo" src={logo} alt="logo" />
        </button>
        <h2>Mekqa Arts</h2>
        <ul className="nav-links desktop-only">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="updates"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Обновления
            </NavLink>
          </li>
        </ul>
        <div className="nav-links nav-login desktop-only">
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Войти
          </NavLink>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="updates"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Обновления
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Войти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
