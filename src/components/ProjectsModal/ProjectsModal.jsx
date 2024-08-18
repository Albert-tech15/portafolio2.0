import React from 'react';
import Modal from '../Modal/Modal';
import './ProjectsModal.css';

const ProjectsModal = ({ isOpen, onClose, activeCategory = 'All' }) => {
    if (!isOpen) return null;

    const projectData = [
        { title: "Proyecto 1", description: "Descripción del Proyecto 1", link: "#", category: "Web" },
        { title: "Proyecto 2", description: "Descripción del Proyecto 2", link: "#", category: "Mobile" },
        { title: "Proyecto 3", description: "Descripción del Proyecto 3", link: "#", category: "Web" },
        { title: "Proyecto 4", description: "Descripción del Proyecto 4", link: "#", category: "Design" },
    ];

    const filteredProjects = projectData.filter(
    project => activeCategory === 'All' || project.category === activeCategory);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="projects-title">Mis Proyectos</h2>
            <div className="projects-container">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link">Ver más</a>
                        </div>
                    ))
                ) : (
                    <p>No hay proyectos disponibles para esta categoría.</p>
                )}
            </div>
        </Modal>
    );
};

export default ProjectsModal;
