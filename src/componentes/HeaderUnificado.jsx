// HeaderUnificado.jsx - Versión Minimalista Oscura
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiBook, FiSearch, FiX, FiChevronDown } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado({ categories = [], onCategoryChange, searchQuery, setSearchQuery }) {
  const location = useLocation();
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="main-header">
      <div className="header-content">
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
        <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <Link
            to="/main-notas"
            className={`nav-item ${isActive("/main-notas") ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span>Mis Notas</span>
          </Link>

          {/* Selector de categorías */}
          {categories.length > 0 && (
            <div className="category-selector">
              <FiChevronDown className="dropdown-icon" />
              <select
                onChange={(e) => onCategoryChange(e.target.value)}
                className="category-dropdown"
              >
                <option value="">Categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          )}
        </nav>

        {/* Búsqueda y controles */}
        <div className="controls-container">
          <div className={`search-wrapper ${searchActive ? 'active' : ''}`}>
            <FiSearch className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar..."
              className="search-input"
              onFocus={() => setSearchActive(true)}
              onBlur={() => !searchQuery && setSearchActive(false)}
            />
            {searchQuery && (
              <button 
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                <FiX />
              </button>
            )}
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderUnificado;