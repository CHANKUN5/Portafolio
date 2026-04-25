import React from 'react';
import './Hero.css';
import { profile } from '../../data/profile';
import { GitHubDark } from '@ridemountainpig/svgl-react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="hero-badge">Disponible para nuevos proyectos</span>
                    <h1 className="hero-name">Hola, soy <span className="text-gradient">Kassandra Castro</span></h1>
                    <h2 className="hero-title">{profile.subtitle}</h2>
                    <p className="hero-description">
                        Especialista en crear experiencias digitales modernas con un enfoque en
                        <strong> código limpio</strong> y <strong>arquitectura escalable</strong>.
                    </p>
                    <div className="hero-actions">
                        <button className="pill-button" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            Contáctame
                        </button>

                        <a href="/CV_Kassandra_Castro_Junior_Frontend.pdf" download className="pill-button">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Curriculum
                        </a>

                        <button className="pill-button" onClick={() => window.open(profile.github, '_blank')}>
                            <GitHubDark width={20} height={20} />
                            GitHub
                        </button>
                    </div>
                </div>

                <div className="profile-container">
                    <div className="profile-wrapper">
                        <div className="profile-border"></div>
                        <img src="/perfil.png" alt={profile.name} className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};
