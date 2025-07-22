// Importación de React
import React from 'react';

// Importación del componente que contiene el formulario con slider
import ContactoFormularioSlider from "./ContactoFormularioSlider";

// Importación de estilos específicos para este componente
import '../assets/scss/_03-Componentes/_ConsultasAyuda.scss';

/**
 * ConsultasAyuda
 * - Componente principal de la sección de ayuda
 * - Contiene un título, subtítulo y el formulario con slider
 */
const ConsultasAyuda = () => {
  return (
    <div className="ayuda">
      {/* Título principal */}
      <h2>Ayuda</h2>

      {/* Contenedor del formulario */}
      <form>
        {/* Subtítulo del formulario */}
        <h1>Formulario de Ayuda</h1>

        {/* Componente que contiene el formulario real y un slider animado */}
        <ContactoFormularioSlider />
      </form>
    </div>
  );
}

export default ConsultasAyuda;
