import React from 'react'
import { useRef } from 'react'
import './navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <header>
        <h1>MC</h1>
        <nav ref={navRef}>
            <a href="#home">Inicio</a>
            <a href="">Propiedades</a>
            <a href="">Nuestros Valores</a>
            <a href="">Contacto</a>
            <button
                className='nav-btn nav-close-btn'
                onClick={showNavbar}>
                    <FaTimes />
            </button>
        </nav>
        <button
            className='nav-btn'
            onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar