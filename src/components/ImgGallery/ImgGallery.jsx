import React from "react";
import "./imggallery.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, EffectCreative } from "swiper";
function ImgGallery() {
  return (
    <>
      <div className="hdr">
        <h2>Más Información:</h2>
        <p></p>
      </div>
      <div className="row">
        <div className="column">
          <img src="../img/info1.jpg" alt="" />
          <img src="../img/info3.jpg" alt="" />
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
              <img src="../img/orientacion.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/o-norte.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/o-sur.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/o-oeste.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/o-este.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="column">
          <img src="../img/info2.jpg" alt="" />
          <img src="../img/info4.jpg" alt="" />
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
              <img src="../img/arreglos.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/arreglos-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/arreglos-2.jpg" />
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
              <a href="https://www.instagram.com/p/CX_i98yM3rY/" target="_blank" rel="noopener noreferrer"><img src="../img/emprendimiento.jpg" alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/emprendimiento-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/emprendimiento-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/emprendimiento-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/emprendimiento-4.jpg" alt="" />
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
              <a href="https://www.instagram.com/p/CPGV9k_NEXC/" target="_blank" rel="noopener noreferrer"><img src="../img/cocheras.jpg" alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/cocheras-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../img/cocheras-2.jpg" alt="" />
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
              <a href="https://www.instagram.com/p/CeLyS5dLPZd/" target="_blank" rel="noopener noreferrer"><img src="../img/venta.jpg" alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.instagram.com/p/Cd5652yrpAM/" target="_blank" rel="noopener noreferrer">
              <img src="../img/venta-2.jpg" alt="" />

              </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://www.instagram.com/p/CdVrUkAAkTJ/" target="_blank" rel="noopener noreferrer">
              <img src="../img/venta-3.jpg" alt="" />

                </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ImgGallery;
