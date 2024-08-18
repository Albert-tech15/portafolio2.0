import React, { useState } from 'react';
import TronBackground from './components/TronBackground/TronBackground.jsx';
import Header from './components/Header/Header.jsx';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Modal from './components/Modal/Modal.jsx';
import ProjectsModal from './components/ProjectsModal/ProjectsModal.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';

function App() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Nuevo estado para el modal de contacto

  const openAboutMeModal = () => setIsAboutMeOpen(true);
  const closeAboutMeModal = () => setIsAboutMeOpen(false);

  const openProjectsModal = () => setIsProjectsModalOpen(true);
  const closeProjectsModal = () => setIsProjectsModalOpen(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="App">
      <Header 
        onOpenAboutMeModal={openAboutMeModal} 
        onOpenProjectsModal={openProjectsModal}
        onOpenContactModal={openContactModal} // Agregamos el handler para abrir el modal de contacto
      />
      <HeroSection />
      <Modal isOpen={isAboutMeOpen} onClose={closeAboutMeModal}>
        <AboutMe />
      </Modal>
      <ProjectsModal isOpen={isProjectsModalOpen} onClose={closeProjectsModal} />
      <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
        <ContactForm />
      </Modal>
      <TronBackground />
    </div>
  );
}

export default App;
