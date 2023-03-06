import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import data from './data.json';
import 'boxicons';

import './propiedades.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



function Propiedades() {

  return (
    <section className="popular section" id="popular">
        <div className="container">
            <span className="section__subtitle">Mejor elección</span>
            <h2 className='section__title'>Nuestras Propiedades <span>.</span></h2>
            
            <Swiper className="popular__container swiper"
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                pagination={{clickable: true}}
                loop={true}
                breakpoints={{
                    534: {
                        slidesPerView: 3
                    },
                    320: {
                        slidesPerView: 1
                    }
                }}
            >
                {data.propiedades.map((propiedad, index) => (
                    <div className="swiper-wrapper" key={index}>
                    <SwiperSlide className='popular__card swiper-slide'>
                        <img src={propiedad.imagen} alt={propiedad.nombre} className="popular__img" />

                        <div className="popular__data">
                            <h2 className="popular__price">
                                <span>USD</span> {propiedad.precio}
                            </h2>
                            <h3 className="popular__title">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    {propiedad.nombre}
                                </a>
                            </h3>
                            <p className="popular__description">
                                {propiedad.descripcion}
                            </p>
                        </div>
                    </SwiperSlide>
                    </div>
                ))};
            </Swiper>
        </div>
    </section>
  )
}

export default Propiedades