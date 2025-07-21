import React from "react";
import MainNotas from "./MainNotas";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="main-content-container">
      <div className="content-wrapper">
        <MainNotas />
      </div>
    </main>
  );
}

export default MainContent;
