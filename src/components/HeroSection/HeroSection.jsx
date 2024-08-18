import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">¡Hola, soy [Cristopher Colin]!</h1>
        <h2 className="hero-subtitle">Desarrollador Web | Diseñador | Creador</h2>
        <div className="hero-buttons">
          <a href="/path/to/your-cv.pdf" className="hero-button" download>Descargar CV</a>
          <a href="#skills" className="hero-button hero-button-alt">Ver Habilidades</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
