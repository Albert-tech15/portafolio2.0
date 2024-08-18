import React from "react";
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me-content">
                <h2 className="about-me-title">Sobre Mí</h2>
                <div className="about-me-body">
                    <div className="about-me-text">
                        <p>
                            ¡Hola! Soy Cristopher, un apasionado de la tecnología y la programación.
                        </p>
                        <p>
                            Mi objetivo es disfrutar trabajando en proyectos que me motiven y a la vez me desafíen.
                        </p>
                    </div>
                    <div className="about-me-image">
                        <img src="/images/images.png" alt="Perfil" />
                    </div>
                </div>
                <div className="about-me-skills">
                    <h3>Habilidades</h3>
                    <ul>
                        <li>Habilidad 1</li>
                        <li>Habilidad 2</li>
                        <li>Habilidad 3</li>
                        <li>Habilidad 4</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
