// src/componentes/FooterGondraWorldDev.jsx
import React from "react";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

/**
 * FooterGondraWorldDev
 * Firma final con marca personal y enlace a Gondra World Dev
 */
function FooterGondraWorldDev() {
  return (
    <div className="trademarkGondraFooter">
      <div className="textoFooterAutor">
        <a
          href="https://alejandrobavaro.github.io/gondraworld-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="textoFooterGondraWorld">
            <i className="bi bi-brilliance" /> Gondra World Dev <i className="bi bi-brilliance" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FooterGondraWorldDev;
