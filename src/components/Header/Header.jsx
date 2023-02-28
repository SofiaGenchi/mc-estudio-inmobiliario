import React from "react";
import "./header.css";
import "boxicons";

const Header = () => {
  
  function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >= 50) header.classList.add("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);
  
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo" id="">
          MC Estudio Inmobiliario <box-icon className='home' name="home"></box-icon>
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link active-link">
                <box-icon type="solid" name="home-alt-2"></box-icon>
                <span>Inicio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <box-icon name='building-house'></box-icon>
                <span>Propiedades</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <box-icon name="award"></box-icon>
                <span>Valoración</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <box-icon name="phone"></box-icon>
                <span>Contacto</span>
              </a>
            </li>
          </ul>
        </div>
        <box-icon
          name="moon"
          className="change-theme"
          id="theme-button"
        ></box-icon>
      </nav>
    </header>
  );
};

export default Header;
