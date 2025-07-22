import React from "react";
import "../assets/scss/_03-Componentes/_ContactoLogoRedes.scss";

const ContactoLogoRedes = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-content">
        {/* Columna de logos */}
        <div className="logo-column">
          <a href="#" className="logo-main-link">
            <img
              alt="Logo principal"
              className="logo-main"
                         src="/img/02-logos/logomininotas.png"
            />
          </a>
          

        </div>

        {/* Columna de iconos de contacto */}
        <div className="contact-icons">
          <div className="contact-item">
            <a
              href="https://www.facebook.com/alegondramusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook" /> Facebook
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.instagram.com/alegondramusic/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" /> Instagram
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube" /> YouTube
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://open.spotify.com/artist/7qo7PxAcvyyyZb6XztH7zE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-spotify" /> Spotify
            </a>
          </div>
          <div className="contact-item">
            <a
              href="mailto:bavaroalejandro@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-envelope" /> Escríbenos un mail
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-paypal" /> Colaborá con nosotros
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoLogoRedes;