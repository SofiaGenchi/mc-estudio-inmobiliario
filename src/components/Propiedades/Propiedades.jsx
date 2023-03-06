import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';

const Propiedades = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        async function fetchPopulars() {
            const requestURL = 'public/json/datos.json';
            const response = await fetch(requestURL);
            const propiedadesText = await response.text();
            const misPropiedades = JSON.parse(propiedadesText);
            setPopular(misPropiedades.popular);
        }
        fetchPopulars();
    }, []);


  return (
    <section className="popular section" id="popular">
        <div className="container">
            <span className="section__subtitle">Mejor elección</span>
            <h2 className='section__title'>Nuestras Propiedades <span>.</span></h2>
            
            <Swiper className="popular__container swiper"
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                {popular.map((propiedad) => (
                    <div className="swiper-wrapper" key={propiedad.nombre}>
                    <SwiperSlide className='popular__Card swiper-slide'>
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
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Propiedades