import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiHelpCircle } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Footer.scss";

/**
 * Componente Footer con la estética consistente del proyecto
 * 
 * Cambios realizados:
 * - Adaptado a la paleta de colores bordó
 * - Reestructurado según mobile-first
 * - Breakpoints en 768px y 1024px
 * - Estilos consistentes con MainNotas
 */
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Columna izquierda con logo */}
          <div className="footer-column">
            <a href="#" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logoheader1-izquierda.png"
                alt="Logo izquierdo"
              />
            </a>
          </div>
          
          {/* Columna central con enlaces sociales */}
          <div className="footer-column">
            <div className="social-links">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-instagram" /> Instagram
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-youtube" /> YouTube
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-facebook" /> Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-twitter" /> Twitter
              </a>
              <Link to="/ayuda" className="social-link help-link">
                <FiHelpCircle className="me-2" />
                Ayuda
              </Link>
            </div>
          </div>
          
          {/* Columna derecha con logo */}
          <div className="footer-column">
            <a href="#" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logoheader2-derecha.png"
                alt="Logo derecho"
              />
            </a>
          </div>
        </div>
        
        {/* Divisor con estilo bordó */}
        <div className="footer-divider"></div>
        
        {/* Copyright */}
        <div className="footer-copyright">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;