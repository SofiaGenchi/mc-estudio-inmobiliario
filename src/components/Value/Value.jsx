import React from "react";
import "boxicons";
import "./value.css";

const Value = () => {
  
  return (
    <section className="value section" id="value">
      <div className="value__container container grid">
        <div className="value__images">
          <div className="value__orbe"></div>

          <div className="value__img">
            <img src="../img/value.jpg" alt="" />
          </div>
        </div>

        <div className="value__content">
          <div className="value__data">
            <span className="section__subtitle">Nuestros valores</span>
            <h2 className="section__title">
              Valores que brindamos<span>.</span>
            </h2>
            <p className="value__accordion-description">
              Siempre estamos listos para ayudar brindandole el mejor servicio.
              Creemos que un buen lugar para vivir puede mejorar su vida.
            </p>
          </div>

          <div className="value__accordion">
            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <box-icon type="solid" name="shield-x"></box-icon>
                <h3 className="value__accordion-title">
                  Las mejores tasas de interés del mercado
                </h3>
                <div className="value__accordion-arrow">
                  {/* <box-icon name="down-arrow" type="solid"></box-icon> */}
                </div>
              </header>

              {/* <div className="value__accordion-content">
                <p className="value__accordion-description">
                  El precio que ofrecemos es el mejor para usted.
                </p>
              </div> */}
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <box-icon type="solid" name="x-square"></box-icon>
                <h3 className="value__accordion-title">
                  Prevenir precios inestables
                </h3>
                <div className="value__accordion-arrow">
                  {/* <box-icon name="down-arrow" type="solid"></box-icon> */}
                </div>
              </header>

              {/* <div className="value__accordion-content">
                <p className="value__accordion-description">
                  Le garantizamos que no habra cambios sobre el precio de su
                  propiedad debido a variaciones inesperadas que puedan surgir.
                </p>
              </div> */}
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <box-icon name="bar-chart-square" type="solid"></box-icon>
                <h3 className="value__accordion-title">
                  El mejor precio del mercado
                </h3>
                <div className="value__accordion-arrow">
                  {/* <box-icon name="down-arrow" type="solid"></box-icon> */}
                </div>
              </header>

              {/* <div className="value__accordion-content">
                <p className="value__accordion-description">
                  El precio que ofrecemos es el mejor para usted
                </p>
              </div> */}
            </div>

            <div className="value__accordion-item">
              <header className="value__accordion-header">
                <box-icon type="solid" name="check-square"></box-icon>
                <h3 className="value__accordion-title">
                  Seguridad de sus datos
                </h3>
                <div className="value__accordion-arrow">
                  {/* <box-icon name="down-arrow" type="solid"></box-icon> */}
                </div>
              </header>

              {/* <div className="value__accordion-content">
                <p className="value__accordion-description">
                  La seguridad de nuestros clientes es nuestra prioridad.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
