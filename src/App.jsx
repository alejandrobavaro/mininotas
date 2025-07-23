// App.jsx (versión final con estética unificada)
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/_01-General/_App.scss";

import HeaderUnificado from "./componentes/HeaderUnificado";
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
import MainNotas from "./componentes/MainNotas";
import Footer from "./componentes/Footer";
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";
import ConsultasAyuda from "./componentes/ConsultasAyuda";

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="app-container">
        <HeaderUnificado 
          categories={['Notas rápidas', 'Ideas', 'Pendientes']}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="main-content-wrapper">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route
                path="/contacto"
                element={
                  <>
                    <ContactoLogoRedes />
                    <ContactoFormularioSlider />
                  </>
                }
              />
              <Route path="/ayuda" element={<ConsultasAyuda />} />
              <Route path="/main-notas" element={<MainNotas />} />
            </Routes>
          </div>
        </main>

        <MainPublicidadSlider />
        <Footer />
        {/* <MainWhatsappIcon /> */}
      </div>
    </Router>
  );
}

export default App;