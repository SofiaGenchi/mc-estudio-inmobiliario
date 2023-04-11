import React from "react";
import "./header.css";
import "boxicons";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {/* MC <box-icon type="solid" name="home"></box-icon> */}
          <img src="../favicon-32x32.png" alt="" />
          
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              {/* <a href="#home" className="nav__link">
                            <box-icon name='home-alt-2' type='solid' ></box-icon>
                            <span>Inicio</span>
                        </a> */}
              <Link to={`/`} className="nav__link">
                <box-icon name="home-alt-2" type="solid"></box-icon>
                <span>Inicio</span>
              </Link>
            </li>

            <li className="nav__item">
              {/* <a href="#propiedades" className="nav__link">
                            <box-icon type='solid' name='buildings'></box-icon>
                            <span>Propiedades</span>
                        </a> */}
              <Link to={`/propiedades`} className="nav__link">
                <box-icon type="solid" name="buildings"></box-icon>
                <span>Propiedades</span>
              </Link>
            </li>

            <li className="nav__item">
              {/* <a href="#info" className="nav__link">
                            <box-icon name='news'></box-icon>
                            <span>Información</span>
                        </a> */}
              <Link to={`/informacion`} className="nav__link">
                <box-icon name="news"></box-icon>
                <span>Información</span>
              </Link>
            </li>

            <li className="nav__item">
              {/* <a href="#contact" className="nav__link">
                            <box-icon name='phone'></box-icon>
                            <span>Contacto</span>
                        </a> */}
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
