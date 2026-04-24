import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    Kassandra<span>.</span>
                </div>
                <p className="footer-tagline">Junior Frontend Developer | Construyendo el futuro web.</p>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kassandra Castro. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
