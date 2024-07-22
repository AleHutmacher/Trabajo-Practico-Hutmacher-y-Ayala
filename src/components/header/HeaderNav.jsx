import React from "react";
import Nav from "/src/components/nav/Nav.jsx";

function HeaderNav() {
  return (
    <div className="header-nav">
      <ul className="flex justify-evenly">
        <a href="#inicio">
          <li className="text-emerald-700 text-2xl nav-li">Historia</li>
        </a>
        <a href="#menu">
          <li className="text-emerald-700 text-2xl nav-li">Menú</li>
        </a>
        <a href="#galeria">
          <li className="text-emerald-700 text-2xl nav-li">Galería</li>
        </a>
        <a href="#contacto">
          <li className="text-emerald-700 text-2xl nav-li">Contacto y Ubicación</li>
        </a>
      </ul>
    </div>
  );
}

export default HeaderNav;
