// MainContent.jsx (versión final)
import React from "react";
import MainNotas from "./MainNotas";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="main-content">
      <div className="content-container">
        <MainNotas />
      </div>
    </main>
  );
}

export default MainContent;