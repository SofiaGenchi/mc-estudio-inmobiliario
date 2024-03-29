import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import data from './data.json';
import 'boxicons';

import './propiedades.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ScrollReveal from 'scrollreveal';
import { useState } from 'react';


function Propiedades() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
      })
      
      sr.reveal(`.popular__container`)



      const [estadoBoton, setEstadoBoton] = useState("todos");

      const propiedadesFiltradas =
        estadoBoton === "todos"
            ? data.propiedades
            : data.propiedades.filter(
                (propiedad) => propiedad.estado === estadoBoton
            );

  return (
    <section className="popular section" id="propiedades">
        <div className="container">
            <span className="section__subtitle">Mejor elección</span>
            <h2 className='section__title'>Nuestras Propiedades <span>.</span></h2>
            

            <div className="botones-propiedades">
          <button
            className={
              estadoBoton === "todos"
                ? "boton-estado seleccionado"
                : "boton-estado"
            }
            onClick={() => setEstadoBoton("todos")}
          >
            Todos
          </button>
          <button
            className={
              estadoBoton === "venta"
                ? "boton-estado seleccionado"
                : "boton-estado"
            }
            onClick={() => setEstadoBoton("venta")}
          >
            Venta
          </button>
          <button
            className={
              estadoBoton === "alquiler"
                ? "boton-estado seleccionado"
                : "boton-estado"
            }
            onClick={() => setEstadoBoton("alquiler")}
          >
            Alquiler
          </button>
        </div>
            <Swiper className="popular__container swiper"
                modules={[Navigation]}
                spaceBetween={22}
                // pagination={{clickable: true}}
                loop={true}
                breakpoints={{
                    534: {
                        slidesPerView: 3
                    },
                    320: {
                        slidesPerView: 1
                    }
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
            >
                {propiedadesFiltradas.map((propiedad, index) => (
                    <div className="swiper-wrapper" key={index}>
                    <SwiperSlide className='popular__card swiper-slide'>
                            <a href={propiedad.link} target="_blank" rel="noopener noreferrer">
                                <img src={propiedad.imagen} alt={propiedad.descripcion} className="popular__img" />

                            </a>
                        <div className="popular__data">
                            <h2 className="popular__price">
                                <span>USD</span> {propiedad.precio}
                            </h2>
                            <h3 className="popular__title">
                                <a className='nombre-propiedad' href={propiedad.link} target="_blank" rel="noopener noreferrer">
                                    {propiedad.nombre}
                                </a>
                            </h3>
                            <p className="popular__description">
                                {propiedad.descripcion}
                            </p>
                        </div>
                    </SwiperSlide>
                    </div>
                ))}
                <div className='next-prev'>
                    <div className="prev swiper-prev"><box-icon name='chevron-left' className=""></box-icon></div>
                    <div className="next swiper-next"><box-icon name='chevron-right' className=""></box-icon></div>
                </div>
                
            </Swiper>
        </div>
    </section>
  )
}

export default Propiedades