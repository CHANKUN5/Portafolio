import React from 'react';
import './Hero.css';
import { profile } from '../../data/profile';
import { Button } from '../../components/ui/Button/Button';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="hero-badge">Disponible para nuevos proyectos</span>
                    <h1 className="hero-name">Hola, soy <span className="text-gradient">{profile.name}</span></h1>
                    <h2 className="hero-title">{profile.subtitle}</h2>
                    <p className="hero-description">
                        Especialista en crear experiencias digitales modernas con un enfoque en
                        <strong> código limpio</strong> y <strong>arquitectura escalable</strong>.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                            Ver Proyectos
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.open(profile.github, '_blank')}>
                            GitHub
                        </Button>
                    </div>
                </div>

                <div className="profile-container">
                    <div className="profile-wrapper">
                        <div className="profile-border"></div>
                        <img src="/perfil.png" alt={profile.name} className="profile-img" />
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Desliza</span>
            </div>
        </section>
    );
};
