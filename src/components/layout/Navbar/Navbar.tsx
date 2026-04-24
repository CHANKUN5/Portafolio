import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="nav-logo">
                    <img src="/logo.png" alt="Kassandra Logo" className="logo-img" />
                    <span className="logo-text">Kassandra<span className="text-secondary">.dev</span></span>
                </a>

                <ul className="nav-links">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};
