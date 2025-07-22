// ----------- Importaciones React y librerías ----------- //
// Importamos React y el hook useState para manejar el estado del componente
import React, { useState } from "react";
// Importamos Link y useLocation de react-router-dom para manejar la navegación y la ubicación actual
import { Link, useLocation } from "react-router-dom";
// ----------- Estilos ----------- //
// Importamos los estilos SASS específicos para este componente
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

// ----------- Componente Header ----------- //
// Definimos el componente funcional HeaderUnificado
function HeaderUnificado() {
  // useLocation es un hook que nos permite acceder a la ubicación actual de la aplicación
  const location = useLocation();
  // useState es un hook que nos permite manejar el estado local del componente
  // showInfo es una variable de estado que controla si el modal informativo está visible o no
  const [showInfo, setShowInfo] = useState(false);

  // ----------- Handlers del Modal ----------- //
  // Función para cerrar el modal informativo
  const handleCloseInfo = () => setShowInfo(false);
  // Función para abrir el modal informativo
  const handleShowInfo = () => setShowInfo(true);

  // ----------- Función para determinar si el link está activo ----------- //
  // Función que verifica si la ruta actual coincide con la ruta proporcionada
  const isActive = (path) => location.pathname === path;

  // Retornamos el JSX que define la estructura del componente
  return (
    <header className="header-unificado">
      <div className="contenedor-header">
        {/* ----------- Logo principal que redirige a inicio ----------- */}
        {/* Contenedor del logo que redirige a la página de inicio */}
        <div className="logo">
          <Link to="/">
            <img
              src="../../img/02-logos/logomininotas.png"
              alt="Logo Mini Notas"
              className="logo-img"
            />
          </Link>
        </div>
        {/* ----------- Navegación solo con botón Notas ----------- */}
        {/* Contenedor de los enlaces de navegación */}
        <nav className="nav-links">
          {/* Enlace a la página de notas, con una clase condicional para indicar si está activo */}
          <Link to="/main-notas" className={isActive("/main-notas") ? "activo" : ""}>Notas</Link>
        </nav>
      </div>
    </header>
  );
}

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
export default HeaderUnificado;
