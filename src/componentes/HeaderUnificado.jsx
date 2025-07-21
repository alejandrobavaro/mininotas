import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

// ------------------ ESTILOS ------------------ //
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";


function HeaderUnificado({ categories = [], onCategoryChange, searchQuery, setSearchQuery }) {
  const location = useLocation(); // Hook para saber en qué ruta estamos
  const [showInfo, setShowInfo] = useState(false); // Estado para modal informativo

  // Funciones para el modal
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  // Función para marcar como activo el link actual
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="header-unificado">
        <div className="contenedor-header">
          {/* LOGO PRINCIPAL */}
          <div className="logo">
            <Link to="/">
              <img 
                src="../../public/img/02-logos/logomininotas.png" 
                alt="Logo Mini Notas" 
                className="logo-img" 
              />
            </Link>
          </div>

          {/* NAVEGACIÓN PRINCIPAL */}
          <nav className="nav-links">
            <Link to="/" className={isActive("/") ? "activo" : ""}>Inicio</Link>
            <Link to="/contacto" className={isActive("/contacto") ? "activo" : ""}>Contacto</Link>
            <Link to="/ayuda" className={isActive("/ayuda") ? "activo" : ""}>Ayuda</Link>
            <Link to="/main-notas" className={isActive("/main-notas") ? "activo" : ""}>Notas</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HeaderUnificado;