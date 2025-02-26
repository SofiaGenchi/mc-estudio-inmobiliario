import React, { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import data from "./data.json"
import "boxicons"
import "./propiedades.css"
import ScrollReveal from "scrollreveal"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

function Propiedades() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  })

  sr.reveal(`.popular__container`)

  const propiedadesOrdenadas = useMemo(() => {
    return [...data.propiedades].sort((a, b) => {
      if (a.estado === "disponible" && b.estado !== "disponible") return -1
      if (a.estado !== "disponible" && b.estado === "disponible") return 1
      return 0
    })
  }, [data]) // Updated dependency

  return (
    <section className="popular section" id="propiedades">
      <div className="container">
        <span className="section__subtitle">Mejor elección</span>
        <h2 className="section__title">
          Nuestras Propiedades <span>.</span>
        </h2>

        <Swiper
          className="popular__container swiper"
          modules={[Navigation]}
          spaceBetween={22}
          loop={true}
          breakpoints={{
            534: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {propiedadesOrdenadas.map((propiedad, index) => (
            <SwiperSlide
              className={`popular__card swiper-slide ${propiedad.estado === "vendida" ? "vendida" : ""}`}
              key={index}
            >
              {propiedad.estado === "vendida" ? (
                <div>
                  <img
                    src={propiedad.imagen || "/placeholder.svg"}
                    alt={propiedad.descripcion}
                    className="popular__img"
                  />
                  <div className="vendida-banner">VENDIDO</div>
                </div>
              ) : (
                <a href={propiedad.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={propiedad.imagen || "/placeholder.svg"}
                    alt={propiedad.descripcion}
                    className="popular__img"
                  />
                </a>
              )}
              <div className="popular__data">
                {propiedad.estado !== "vendida" && <h2 className="popular__price">{propiedad.precio}</h2>}
                <h3 className="popular__title">
                  {propiedad.estado === "vendida" ? (
                    <span className="nombre-propiedad">{propiedad.nombre}</span>
                  ) : (
                    <a className="nombre-propiedad" href={propiedad.link} target="_blank" rel="noopener noreferrer">
                      {propiedad.nombre}
                    </a>
                  )}
                </h3>
                <p className="popular__description">{propiedad.descripcion}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="next-prev">
            <div className="prev swiper-prev">
              <box-icon name="chevron-left"></box-icon>
            </div>
            <div className="next swiper-next">
              <box-icon name="chevron-right"></box-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Propiedades
