import React from 'react';
import './Projects.css';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { projects } from '../../data/projects';
import { Badge } from '../../components/ui/Badge/Badge';
import * as Logos from '@ridemountainpig/svgl-react';
import { TailwindCSS } from '../../components/ui/Logos/TailwindCSS';
import { ReactIcon } from '../../components/ui/Logos/ReactIcon';
import { ReactRouterIcon } from '../../components/ui/Logos/ReactRouterIcon';
import { CSSIcon } from '../../components/ui/Logos/CSSIcon';
import { FigmaIcon } from '../../components/ui/Logos/FigmaIcon';

export const Projects: React.FC = () => {
    const getTechConfig = (tech: string) => {
        const t = tech.toLowerCase();
        let LogoComponent = (Logos as any)[tech.replace('.', '').replace(' ', '')];

        if (t.includes('tailwind')) {
            LogoComponent = TailwindCSS;
        } else if (t.includes('router')) {
            LogoComponent = ReactRouterIcon;
        } else if (t === 'react' || t.includes('react ')) {
            LogoComponent = ReactIcon;
        } else if (t === 'css') {
            LogoComponent = CSSIcon;
        } else if (t === 'figma') {
            LogoComponent = FigmaIcon;
        } else if (t.includes('framer') || t.includes('motion')) {
            LogoComponent = Logos.MotionDark;
        } else if (t.includes('bootstrap')) {
            LogoComponent = Logos.Bootstrap;
        } else if (t.includes('next')) {
            LogoComponent = Logos.Nextjs;
        } else if (t.includes('supabase')) {
            LogoComponent = Logos.Supabase;
        } else if (t.includes('vite')) {
            LogoComponent = Logos.Vite;
        } else if (t.includes('typescript')) {
            LogoComponent = Logos.TypeScript;
        }

        let bgColor = 'rgba(255, 255, 255, 0.05)';
        if (t.includes('router')) bgColor = 'rgba(255, 0, 85, 0.2)';
        else if (t.includes('tailwind')) bgColor = 'rgba(6, 182, 212, 0.2)';
        else if (t.includes('next')) bgColor = 'rgba(255, 255, 255, 0.15)';
        else if (t === 'react' || t.includes('react ')) bgColor = 'rgba(97, 218, 251, 0.2)';
        else if (t.includes('typescript')) bgColor = 'rgba(49, 120, 198, 0.2)';
        else if (t.includes('framer') || t.includes('motion')) bgColor = 'rgba(255, 0, 85, 0.15)';
        else if (t === 'css') bgColor = 'rgba(102, 51, 153, 0.3)';
        else if (t === 'figma') bgColor = 'rgba(162, 89, 255, 0.2)';
        else if (t.includes('bootstrap')) bgColor = 'rgba(113, 11, 236, 0.2)';
        else if (t.includes('vite')) bgColor = 'rgba(100, 108, 255, 0.2)';

        return {
            Logo: LogoComponent,
            bgColor
        };
    };

    return (
        <section id="projects" className="projects">
            <SectionTitle
                title="Proyectos Destacados"
                subtitle="Una selección de mis trabajos más recientes en desarrollo frontend."
            />

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card glass">
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.demoUrl && (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="Ver Demo">
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="Ver Código">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.stack.map((tech, idx) => {
                                    const { Logo, bgColor } = getTechConfig(tech);
                                    return (
                                        <Badge key={idx} backgroundColor={bgColor}>
                                            <div className="tag-content" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                {Logo && <Logo width={14} height={14} />}
                                                {tech}
                                            </div>
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-more">
                <a
                    href="https://github.com/CHANKUN5?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-button"
                >
                    Ver más Proyectos
                </a>
            </div>
        </section>
    );
};
