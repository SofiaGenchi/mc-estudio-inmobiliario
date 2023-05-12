import React from 'react'
import './footer.css'
import 'boxicons'
import { Link } from 'react-router-dom'

import ScrollReveal from 'scrollreveal'

const Footer = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
      })
      
      sr.reveal(`.footer__info`, {delay: 200})
  return (
    <footer className="footer section">
        <div className="footer__container container grid">
            <a href="#home" className="footer__logo">
                <img src="../favicon-32x32.png" alt="Maria Ines Sassone Estudio Inmobiliario" />
            </a>
            <p>Nuestra visión es hacer de todas las personas el mejor lugar para vivir para ellas.</p>
        </div>

        <div className="footer__content">
            <div>
                <h3 className="footer__title">Compañía</h3>

                <ul className="footer__links">
                    <li>
                        <Link to={`/informacion`} className='footer__link'>
                            <span>¿Cómo trabajamos?</span>
                        </Link>
                        {/* <a href="#info" className="footer__link">¿Cómo trabajamos?</a> */}
                    </li>

                    <li>
                    <Link to={`/informacion`} className='footer__link'>
                            <span>Seguridad</span>
                        </Link>
                        {/* <a href="#info" className="footer__link">Seguridad</a> */}
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="footer__title">Siganos!</h3>

                <ul className="footer__social">
                    <a className='footer__social-link' href="http://" target="_blank" rel="noopener noreferrer">
                        <box-icon type='logo' name='facebook-circle'></box-icon>
                    </a>

                    <a className='footer__social-link' href="https://www.instagram.com/mc.estudiojuridicoinmobiliario/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
                        <box-icon type='logo' name='instagram-alt'></box-icon>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=+5401136512018&text=Hola, vengo desde tu pagina web, quiero hacerte una consulta." target={'_blank'} className="footer__social-link">
                        <box-icon type='logo' name='whatsapp'></box-icon>
                    </a>
                </ul>
            </div>
        </div>

        <div className="footer__info container">
            <span className="footer__copy">
                <a href="https://www.linkedin.com/in/sofiagenchi" target="_blank" rel="noopener noreferrer">&#169; </a>
                All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer