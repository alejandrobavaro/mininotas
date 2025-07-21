// src/App.jsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// ------------------ ESTILOS GENERALES ------------------ //
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_App.scss";

// ------------------ COMPONENTES ------------------ //
import HeaderUnificado from "./componentes/HeaderUnificado"; // Header principal unificado
import MainContent from "./componentes/MainContent"; // Página principal / inicio
import MainWhatsappIcon from "./componentes/MainWhatsappIcon"; // Ícono flotante de WhatsApp
import MainPublicidadSlider from "./componentes/MainPublicidadSlider"; // Slider de publicidad o contenido destacado
import MainNotas from "./componentes/MainNotas"; // Vista principal de notas
import Footer from "./componentes/Footer"; // Footer general
import ContactoLogoRedes from "./componentes/ContactoLogoRedes"; // Logos y redes en sección contacto
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider"; // Formulario de contacto + slider
import ConsultasAyuda from "./componentes/ConsultasAyuda"; // Sección de consultas / ayuda

function App() {
  // ------------------ ESTADOS GLOBALES ------------------ //
  const [searchQuery, setSearchQuery] = React.useState(''); // Estado para la búsqueda global
  const [selectedCategory, setSelectedCategory] = React.useState(''); // Estado para la categoría seleccionada

  // ------------------ HANDLERS ------------------ //
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // ------------------ ESTRUCTURA DEL ROUTER ------------------ //
  return (
    <Router>
      {/* Header principal con props de categorías, búsqueda y cambios */}
      <HeaderUnificado 
        categories={['Notas rápidas', 'Ideas', 'Pendientes']} 
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <hr className="border border-0 opacity-20" />

      <div className="main-content">
        <div className="content">
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<MainContent />} />

            {/* Ruta a sección de contacto */}
            <Route
              path="/contacto"
              element={
                <>
                  <ContactoLogoRedes />
                  <ContactoFormularioSlider />
                </>
              }
            />

            {/* Ruta a sección de ayuda */}
            <Route path="/ayuda" element={<ConsultasAyuda />} />

            {/* Ruta al historial o visualización de notas */}
            <Route path="/main-notas" element={<MainNotas />} />
          </Routes>
        </div>
      </div>

      <hr className="border border-0 opacity-20" />

      {/* Slider de publicidad o contenido extra */}
      <MainPublicidadSlider />

      {/* Footer general */}
      <Footer />

      {/* Ícono flotante de WhatsApp */}
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;
