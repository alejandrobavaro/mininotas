import React from "react";
import { FiCode } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

function FooterGondraWorldDev() {
  return (
    <div className="developer-credit">
      <a
        href="https://alejandrobavaro.github.io/gondraworld-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="developer-link"
      >
        <FiCode className="developer-icon" /> Gondra World Dev <FiCode className="developer-icon" />
      </a>
    </div>
  );
}

export default FooterGondraWorldDev;
