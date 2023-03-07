import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [buttonText, setButtonText] = useState('Email');

    const copyToClipboard = () => {
        let email = document.getElementById('email');
        let button = document.querySelector(".button-eamil")
        email.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(email.value).then(() => {
            setButtonText('Copiado');
            setTimeout(() => setButtonText('Email'), 1000);
        })
    };
  return (
    <section className="contact section" id="contact">
        <div className="contact__container container grid">
            <div className="contact__images">
                <div className="contact__orbe"></div>

                <div className="contact__img">
                    <img src="../img/contact.jpg" alt="" />
                </div>
            </div>

            <div className="contact__content">
                <div className="contact__data">
                    <span className="section__subtitle">Contáctenos</span>
                    <h2 className="section__title">
                        Facil de localizarnos<span>.</span>
                    </h2>
                    <p className="contact__description">
                    ¿Hay algún problema para encontrar la casa de sus sueños? ¿Necesita una guía para comprar su primera casa? O necesita una consulta sobre temas residenciales.. Sólo contáctenos.
                    </p>
                </div>

                <div className="contact__card">
                    <div className="contact__card-box">
                        <div className="contact__card-info">
                            <box-icon type='solid' name='message-rounded-dots'></box-icon>
                            <div>
                                <h3 className="contact__card-title">Chat</h3>
                                <p className="contact__card-description">
                                    1136512018
                                </p>
                            </div>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=+5401136512018&text=Hola, vengo desde tu pagina web, quiero hacerte una consulta." target="_blank" rel="noopener noreferrer" className='button contact__card-button'>WhatsApp</a>
                    </div>


                    <div className="contact__card-box">
                        <div className="contact__card-info">
                            <box-icon type='solid' name='envelope'></box-icon>
                            <div>
                                <h3 className="contact__card-title">Email</h3>
                                <p className="contact__card-description">
                                    mc.estudiojuridicoinmobiliario@gmail.com
                                </p>
                            </div>
                        </div>
                        <input type="text" id='email'  className='contact__card-description email-code' value={'mc.estudiojuridicoinmobiliario@gmail.com'}/>

                        <button className='button contact__card-button button-email' onClick={copyToClipboard}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact