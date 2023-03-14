import React from "react";
import Contact from "../Contacto/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Propiedades from "../Propiedades/Propiedades";
import "./home.css";

import ScrollReveal from "scrollreveal";
import ImgGallery from "../ImgGallery/ImgGallery";

const Home = () => {
  const sr = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(`.home__title`);
  sr.reveal(`.home__description`, { delay: 200 });
  sr.reveal(`.home__value`, { delay: 400 });
  sr.reveal(`.home__images`, { delay: 600, origin: "botton" });
  sr.reveal(`.home`);
  return (
    <div>
      <Header />

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                MC <br />
                Estudio <br />
                Inmobiliario
              </h1>
              <p className="home__description">
                Encuentre una variedad de propiedades que se adapten a usted muy
                fácilmente, olvídese de todas las dificultades para encontrar un
                hogar.
              </p>

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
          </div>
        </section>
        <Propiedades />
        <ImgGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;