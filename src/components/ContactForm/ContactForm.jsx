import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Logica para enviar el formulario
        console.log('Form data submitted:', formData);
        // Resetea el formulario despues de enviarlo
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
    
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contacto</h2>
            <label>
                Nombre:
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                /> 
            </label>
            <label>
                Email:
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Mensaje:
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                ></textarea>
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;