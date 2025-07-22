// Importaciones necesarias de React y librerías externas
import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Carrusel de imágenes
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importación de estilos SCSS específicos del componente
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

// Componente funcional principal
const ContactoFormularioSlider = () => {
  // Estado para almacenar productos desde un JSON externo
  const [productos, setProductos] = useState([]);

  // useEffect para la carga inicial de productos al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  // Configuración del slider/carousel
  const settings = {
    dots: false, // Sin puntos de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Flechas visibles
  };

  // Renderización del componente
  return (
    <div className="gridPadreContacto2">
      <div className="contact-form-slider-container">
        {/* Formulario de contacto */}
        <div className="form-column box-shadow">
          <form
            className="contact-form"
            action="https://formspree.io/f/xbjnlgzz"
            target="_blank"
            method="post"
          >
            <h2 className="form-title">MINI NOTAS - CONTACTO</h2>

            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="Ingresa tu teléfono"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto del Mensaje:</label>
              <input
                type="text"
                className="form-control"
                id="asunto"
                name="asunto"
                placeholder="Ingresa el asunto del mensaje"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Escribe tu mensaje aquí"
                required
              />
            </div>

            <div className="text-end">
              <button type="submit" className="btn-submit">
                ENVIAR
              </button>
            </div>
          </form>
        </div>

        {/* Columna del slider con productos o multimedia */}
        <div className="slider-column box-shadow">
          <h2 className="slider-title">
            <i className="bi bi-journal-text" /> MINI NOTAS <i className="bi bi-journal-text" />
          </h2>

          {/* Slider dinámico con productos cargados */}
          <Slider {...settings}>
            {productos.map((producto, index) => (
              <div key={index} className="slider-item">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="slider-image"
                />
                <p className="slider-caption">{producto.nombre}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ContactoFormularioSlider;
