import React from "react";
import senaLogo from "../assets/sena.png"; 

export default function Navbar() {
  return (
    <header className="navbar">
      
      <div className="brand">
        
        <img
          src={senaLogo}
          alt="Logo SENA"
          className="logo-sena"
        />

        
        <div className="brand-text">
          <div className="brand-title">SENA</div>
          <div className="brand-subtitle">2025</div>
        </div>
      </div>

      
      <nav className="nav-actions">
        <button className="btn ghost">Servicios</button>
        <button className="btn ghost">Programas</button>
        <button className="btn">Contacto</button>
      </nav>
    </header>
  );
}
