import React from "react";
import "./imggallery.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import ScrollReveal from "scrollreveal";

// import required modules
import { EffectCube, Pagination, EffectCreative } from "swiper";
function ImgGallery() {


  const sr = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(`.row`, { delay: 600, origin: "left" });
  return (
    <>
      <div className="hdr" id="info">
        <h2>Más Información:</h2>
      </div>
      <div className="row">
        <div className="column">
          <img src="../img/info/info1.jpg" alt="Beneficios de invertir en un emprendimiento en pozo" />
          <img src="../img/info/info3.jpg" alt="Qué es el seguro de caucion" />
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="../img/info/orientacion.jpg" alt="Como elegir la orientacion de un departamento"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/o-norte.jpg" alt="orientacion norte"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/o-sur.jpg" alt="orientacion sur"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/o-oeste.jpg" alt="orientacion oeste"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/o-este.jpg" alt="orientacion este"/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="column">
          <img src="../img/info/info2.jpg" alt="Mudarte a un nuevo barrio" />
          <img src="../img/info/info4.jpg" alt="Alquileres y depositos" />
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="../img/info/arreglos.jpg"alt="quien paga los arreglos"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/arreglos-1.jpg" alt="arreglos"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/arreglos-2.jpg" alt="arreglos"/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="column">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <a href="https://www.instagram.com/p/CX_i98yM3rY/" target="_blank" rel="noopener noreferrer"><img src="../img/info/emprendimiento.jpg" alt="emprendimiento en pozo" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/emprendimiento-1.jpg" alt="emprendimiento en pozo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/emprendimiento-2.jpg" alt="emprendimiento en pozo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/emprendimiento-3.jpg" alt="emprendimiento en pozo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/emprendimiento-4.jpg" alt="emprendimiento en pozo" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <a href="https://www.instagram.com/p/CPGV9k_NEXC/" target="_blank" rel="noopener noreferrer"><img src="../img/info/cocheras.jpg" alt="venta de cocheras" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/cocheras-1.jpg" alt="venta de cocheras" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/info/cocheras-2.jpg" alt="venta de cocheras" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <a href="https://www.instagram.com/p/CeLyS5dLPZd/" target="_blank" rel="noopener noreferrer"><img src="../img/info/venta.jpg" alt="venta departamento a estrenar" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.instagram.com/p/Cd5652yrpAM/" target="_blank" rel="noopener noreferrer">
              <img src="../img/info/venta-2.jpg" alt="venta departamento caseros centro" />

              </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://www.instagram.com/p/CdVrUkAAkTJ/" target="_blank" rel="noopener noreferrer">
              <img src="../img/info/venta-3.jpg" alt="caseros venta casa 3 ambientes" />

                </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ImgGallery;
