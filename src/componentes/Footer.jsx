// ----------- Importaciones React y librerías ----------- //
import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiHelpCircle } from "react-icons/fi";

// ----------- Estilos ----------- //
import "../assets/scss/_03-Componentes/_Footer.scss";

// ----------- Componente Footer ----------- //
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* ----------- Logo ----------- */}
        <div className="footer-logos">
          <Link to="/">
            <img
              className="footer-logo"
              src="/img/02-logos/logomininotas.png"
              alt="Mini Notas Logo"
            />
          </Link>
        </div>

        {/* ----------- Navegación trasladada desde el header ----------- */}
        <div className="footer-links">
          <Link to="/" className="footer-link">
            Inicio
          </Link>
          <Link to="/contacto" className="footer-link">
            Contacto
          </Link>
          <Link to="/ayuda" className="footer-link">
            <FiHelpCircle /> Ayuda
          </Link>
          <Link to="/main-notas" className="footer-link">
            Notas
          </Link>
        </div>

        {/* ----------- Links a redes sociales ----------- */}
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="bi bi-youtube"></i> YouTube
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="bi bi-facebook"></i> Facebook
          </a>
        </div>

        <div className="footer-divider"></div>

        {/* ----------- Marca de desarrollo ----------- */}
        <div className="footer-copy">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
