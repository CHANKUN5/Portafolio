import React from 'react';
import './Projects.css';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { projects } from '../../data/projects';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';

export const Projects: React.FC = () => {
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
                                {project.stack.map((tech, idx) => (
                                    <Badge key={idx} variant="outline">{tech}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-more">
                <Button variant="outline" onClick={() => window.open('https://github.com/CHANKUN5', '_blank')}>
                    Ver más en GitHub
                </Button>
            </div>
        </section>
    );
};
