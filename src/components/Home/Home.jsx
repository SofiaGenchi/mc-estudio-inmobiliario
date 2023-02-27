import React from "react";
import "./home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";


const Home = () => {
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
              Descubra <br />
              la propiedad <br />
              más adecuada
            </h1>
            <p className="home__description">
              Encuentre una variedad de propiedades que se adapten a usted muy
              fácilmente, olvídese de todas las dificultades para encontrar un
              hogar.
            </p>
            <form action className="home__search">
              <i className="bx bx-navigation" />
              <input
                type="search"
                placeholder="Search by location..."
                className="home__search-input"
              />
              <button className="button">Buscar</button>
            </form>
            <div className="home__value">
              <div>
                <h2 className="home__value-number">
                  9K <span>+</span>
                </h2>
                <span className="home__value-description">
                  Producto <br />
                  Premium
                </span>
              </div>
              <div>
                <h2 className="home__value-number">
                  2K <span>+</span>
                </h2>
                <span className="home__value-description">
                  Cliente <br />
                  Feliz
                </span>
              </div>
            </div>
          </div>
          <div className="home__images">
            <div className="home__orbe">
              <div className="home__img">
                <img src="./assets/img/homeimg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular section" id="popular">
        <div className="container">
          <span className="section__subtitle">Mejor elección</span>
          <h2 className="section__title">
            Propiedades<span>:</span>
          </h2>


          <Swiper className="popular__container swiper"
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{clickable: true}}
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/propiedad1.jpg"
                  alt=""
                />
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 62.900
                  </h2>
                  <h3 className="popular__title">
                    <a
                      target={"_blank"}
                      href="https://www.argenprop.com/ph-en-venta-en-caseros-3-ambientes--11962371"
                    >
                      PH en Venta en Caseros, Tres de Febrero
                    </a>
                  </h3>
                  <p className="popular__description">
                    Hermoso PH desarrollado en primer piso con acceso por
                    escalera.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/propiedad2.jpg"
                  alt=""/>
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 125.000</h2>
                  <h3 className="popular__title">
                    <a target={"_blank"} href="https://www.argenprop.com/casa-en-venta-en-caseros-3-ambientes--11464974">Casa en Venta en Caseros, Tres de Febrero</a>
                  </h3>
                  <p className="popular__description">Casa en lote propio; 10m de frente x 23,25 de fondo.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/propiedad3.jpg"
                  alt=""/>
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 47.000</h2>
                  <h3 className="popular__title">
                    <a target={"_blank"} href="https://www.argenprop.com/departamento-en-venta-en-caseros-1-ambiente--11598273">Departamento en Venta en Caseros, Tres de Febrero</a>
                  </h3>
                  <p className="popular__description">Hermoso departamento monoambiente. Apto profesional, ubicado en P.7 con balcon de 2,66m2, excelente distribucion.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/propiedad4.jpg"
                  alt=""/>
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 38.000</h2>
                  <h3 className="popular__title">
                    <a target={"_blank"} href="https://www.argenprop.com/departamento-en-venta-en-caseros-1-ambiente--12479097">Departamento en Venta en Caseros, Tres de Febrero</a>
                  </h3>
                  <p className="popular__description">La unidad sera de 1 amb. con una excelente distribucion y facil division.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/propiedad5.jpg"
                  alt=""/>
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 85.000</h2>
                  <h3 className="popular__title">
                    <a target={"_blank"} href="https://www.argenprop.com/ph-en-venta-en-santos-lugares-4-ambientes--11387261">PH en Venta en Santos Lugares, Tres de Febrero</a>
                  </h3>
                  <p className="popular__description">Excelente PH al frente con cochera, 4 amb. con patio y terraza.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/propiedad6.jpg"
                  alt=""/>
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 45.000</h2>
                  <h3 className="popular__title">
                    <a target={"_blank"} href="https://www.argenprop.com/departamento-en-venta-en-san-clemente-del-tuyu--11434603">Departamento en Venta en San Clemente Del Tuyu, De La Costa</a>
                  </h3>
                  <p className="popular__description">Excelente oportunidad para invertir en la costa!</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="popular__card swiper-slide">
                <img
                  className="popular__img"
                  src="./img/cochera1.jpg"
                  alt=""/>
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>USD</span> 8.000</h2>
                  <h3 className="popular__title">
                    <a target={"_blank"} href="https://www.argenprop.com/cochera-en-venta-en-caseros--11426461">Cochera en Venta en Caseros, Tres de Febrero</a>
                  </h3>
                  <p className="popular__description">Cochera descubierta. Con porton automatizado, tu mejor opcion para invertir!</p>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
      <section className="value section" id="value">
        <div className="value__container container grid">
          <div className="value__images">
            <div className="value__orbe" />
            <div className="value__img">
              <img src="./assets/img/value.jpg" alt="" />
            </div>
          </div>
          <div className="value__content">
            <div className="value__data">
              <span className="section__subtitle">Nuestros valores</span>
              <h2 className="section__title">
                Valores que brindamos<span>.</span>
              </h2>
              <p className="value__accordion-description">
                Siempre estamos listos para ayudar brindandole el mejor
                servicio. Creemos que un buen lugar para vivir puede mejorar su
                vida.
              </p>
            </div>
            <div className="value__accordion">
              <div className="value__accordion-item">
                <header className="value__accordion-header">
                  <i className="bx bxs-shield-x value__accordion-icon" />
                  <h3 className="value__accordion-title">
                    Las mejores tasas de interés del mercado
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className="bx bxs-down-arrow" />
                  </div>
                </header>
                <div className="value__accordion-content">
                  <p className="value__accordion-description">
                    El precio que ofrecemos es el mejor para usted.
                  </p>
                </div>
              </div>
              <div className="value__accordion-item">
                <header className="value__accordion-header">
                  <i className="bx bxs-x-square value__accordion-icon" />
                  <h3 className="value__accordion-title">
                    Prevenir precios inestables
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className="bx bxs-down-arrow" />
                  </div>
                </header>
                <div className="value__accordion-content">
                  <p className="value__accordion-description">
                    Le garantizamos que no habra cambios sobre el precio de su
                    propiedad debido a variaciones inesperadas que puedan
                    surgir.
                  </p>
                </div>
              </div>
              <div className="value__accordion-item">
                <header className="value__accordion-header">
                  <i className="bx bxs-bar-chart-square value__accordion-icon" />
                  <h3 className="value__accordion-title">
                    El mejor precio del mercado
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className="bx bxs-down-arrow" />
                  </div>
                </header>
                <div className="value__accordion-content">
                  <p className="value__accordion-description">
                    El precio que ofrecemos es el mejor para usted
                  </p>
                </div>
              </div>
              <div className="value__accordion-item">
                <header className="value__accordion-header">
                  <i className="bx bxs-check-square value__accordion-icon" />
                  <h3 className="value__accordion-title">
                    Seguridad de sus datos
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className="bx bxs-down-arrow" />
                  </div>
                </header>
                <div className="value__accordion-content">
                  <p className="value__accordion-description">
                    La seguridad de nuestros clientes es nuestra prioridad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact section" id="contact">
        <div className="contact__container container grid">
          <div className="contact__images">
            <div className="contact__orbe" />
            <div className="contact__img">
              <img src="./assets/img/contact.png" alt="" />
            </div>
          </div>
          <div className="contact__content">
            <div className="contact__data">
              <span className="section__subtitle">Contáctenos</span>
              <h2 className="section__title">
                Facil de localizarnos<span>.</span>
                <p className="contact__description">
                  ¿Hay algún problema para encontrar la casa de sus sueños?
                  ¿Necesita una guía para comprar su primera casa? O necesita
                  una consulta sobre temas residenciales.. Sólo contáctenos.
                </p>
              </h2>
            </div>
            <div className="contact__card">
              <div className="contact__card-box">
                <div className="contact__card-info">
                  <i className="bx bxs-phone-call" />
                  <div>
                    <h3 className="contact__card-title">Llamada</h3>
                    <p className="contact__card-description">022.321.456.12</p>
                  </div>
                </div>
                <button className="button contact__card-button">
                  Llame ahora
                </button>
              </div>
              <div className="contact__card-box">
                <div className="contact__card-info">
                  <i className="bx bxs-message-rounded-dots" />
                  <div>
                    <h3 className="contact__card-title">Chat</h3>
                    <p className="contact__card-description">022.321.456.12</p>
                  </div>
                </div>
                <button className="button contact__card-button">
                  Chatee ahora
                </button>
              </div>
              <div className="contact__card-box">
                <div className="contact__card-info">
                  <i className="bx bxs-envelope" />
                  <div>
                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-description">email@email.com</p>
                  </div>
                </div>
                <button className="button contact__card-button">Email</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
