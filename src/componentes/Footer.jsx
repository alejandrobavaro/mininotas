import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiBook } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Logo y marca */}
        <div className="brand-container">
          <Link to="/" className="brand-link">
            <div className="logo-circle">
              <FiBook className="logo-icon" />
            </div>
            <span className="app-name">Mini Notas</span>
          </Link>
        </div>
        {/* Navegación principal */}
        <nav className="nav-container">
          {/* <Link to="/main-notas" className="nav-item">
            <span>Mis Notas</span>
          </Link> */}
        </nav>
        <div className="footer-copyright">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
