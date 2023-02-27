import React from "react";
import "./home.css";

const Home = () => {
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
              Descubre <br /> la propiedad <br /> más adecuada
            </h1>

            <p className="home__description">
              Encuentre una variedad de propiedades que se adapten a usted muy
              facilmente, olvidese de todas las dificultades para encontrar un
              hogar.
            </p>

            {/* <form action="" className="home__search">
                        <box-icon className='navigation' name='navigation'></box-icon>
                        <input type="search" placeholder='Buscar por localidad...' className="home__search-input" />
                        <button className="button">Buscar</button>
                    </form> */}

            <div className="home__value">
              <div>
                <h2 className="home__value-number">
                  9k <span>+</span>
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
                  <img src="../img/homeimg.jpg" alt="" />
                </div>
              </div>
          </div>
        </div>
      </section>
      

      <section className="popular section" id="popular">
        <div className="container">
            <span className="section__subtitle">Mejor elección</span>
            <h2 className="section__title">Casas Populares <span>.</span></h2>

            <div className="popular__container swiper">
                <div className="swiper-wrapper">
                    <article className="popular__card swiper-slide">
                        <img src="" alt="" className="popular__img" />
                        <div className="popular__data">
                            <h2 className="popular__price"><span>$$</span></h2>
                            <h3 className="popular__title"></h3>
                            <p className="popular__description"></p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
