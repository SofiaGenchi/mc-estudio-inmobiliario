import React from "react";
import "./header.css";
import "boxicons";

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to={`/`} className="nav__logo">
          <img src="../favicon-32x32.png" alt="Maria Ines Sassone Estudio Inmobiliario" />
        </Link>
        {/* <a href="#" className="nav__logo">
          <img src="../favicon-32x32.png" alt="Maria Ines Sassone Estudio Inmobiliario" />
        </a> */}

        <div className="nav__menu">
          <ul className="nav__list">
            <li className={`nav__item ${isActive("/") && "active"}`}>
              <Link to={`/`} className="nav__link">
                <box-icon name="home-alt-2" type="solid"></box-icon>
                <span>Inicio</span>
              </Link>
            </li>

            <li className={`nav__item ${isActive("/propiedades") && "active"}`}>
              <Link to={`/propiedades`} className="nav__link">
                <box-icon type="solid" name="buildings"></box-icon>
                <span>Propiedades</span>
              </Link>
            </li>

            <li className={`nav__item ${isActive("/informacion") && "active"}`}>
              <Link to={`/informacion`} className="nav__link">
                <box-icon name="news"></box-icon>
                <span>Información</span>
              </Link>
            </li>

            <li className={`nav__item ${isActive("/contacto") && "active"}`}>
              <Link to={`/contacto`} className="nav__link">
                <box-icon name="phone"></box-icon>
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;