import React from 'react'
import './header.css'
import 'boxicons'

const Header = () => {
    
  return (
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">
                MC <box-icon type='solid' name='home'></box-icon>
            </a>

            <div className="nav__menu">
                <ul className="nav__list">

                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <box-icon name='home-alt-2' type='solid' ></box-icon>
                            <span>Inico</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#propiedades" className="nav__link">
                            <box-icon type='solid' name='buildings'></box-icon>
                            <span>Propiedades</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#info" className="nav__link">
                            <box-icon name='news'></box-icon>
                            <span>Información</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <box-icon name='phone'></box-icon>
                            <span>Contacto</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header