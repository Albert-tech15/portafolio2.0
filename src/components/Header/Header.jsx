import React, { useEffect } from 'react';
import './Header.css';

const Header = ({ onOpenAboutMeModal, onOpenProjectsModal, onOpenContactModal }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container');
      const scrollPosition = window.scrollY;
      header.style.boxShadow = `0 0 ${scrollPosition}px #00ffff`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header-container">
      <h1 className="header-title">Mi Portafolio</h1>
      <nav className="header-nav">
        <ul>
          <li><button onClick={() => window.scrollTo(0, 0)}>Inicio</button></li>
          <li><button onClick={onOpenAboutMeModal}>Sobre mí</button></li>
          <li><button onClick={onOpenProjectsModal}>Proyectos</button></li>
          <li><button onClick={onOpenContactModal}>Contacto</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
