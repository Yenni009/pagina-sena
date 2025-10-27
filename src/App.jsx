import React from "react";
import "./css/landing.css";

// Importamos los componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="container">
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección principal con título y frase */}
      <Hero />

      {/* Sección de tarjetas o programas */}
      <Programs />

      {/* Formulario de contacto */}
      <ContactForm />
    </div>
  );
}

