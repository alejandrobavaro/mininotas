// ----------- Importación de React ----------- //
import React from "react";

// ----------- Importación de componente hijo que renderiza las notas ----------- //
import MainNotas from "./MainNotas";

// ----------- Importación de estilos SCSS ----------- //
import "../assets/scss/_03-Componentes/_MainContent.scss";

// ----------- Componente funcional principal que renderiza el contenido de notas ----------- //
function MainContent() {
  return (
    <main className="main-content-container">
      <div className="content-wrapper">
        {/* Componente principal de notas */}
        <MainNotas />
      </div>
    </main>
  );
}

// ----------- Exportación del componente ----------- //
export default MainContent;
