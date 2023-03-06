import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';

const Propiedades = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        try {
            const response = await fetch('assets/json/datos.json');
            const data = await response.json();
            setPopular(data);
        } catch (error) {
            console.log(error);
        }
    };


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
                <div className="swiper-wrapper">
                    <SwiperSlide></SwiperSlide>
                </div>
            </Swiper>
        </div>
    </section>
  )
}

export default Propiedades