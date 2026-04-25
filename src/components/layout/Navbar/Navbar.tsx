import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const navItems = [
        { name: 'Inicio', href: '#home', id: 'home' },
        { name: 'Sobre mí', href: '#about', id: 'about' },
        { name: 'Proyectos', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contacto', href: '#contact', id: 'contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
                    <span className="logo-text">Kassandra<span className="text-secondary">.dev</span></span>
                </a>

                <div className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className={activeSection === item.id ? 'active' : ''}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
