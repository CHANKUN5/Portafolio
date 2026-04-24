import React from 'react';
import './Experience.css';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience">
            <SectionTitle title="Experiencia Laboral" />

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass">
                            <div className="timeline-header">
                                <h3>{exp.role}</h3>
                                <span className="timeline-period">{exp.period}</span>
                            </div>
                            <p className="timeline-company">{exp.company}</p>
                            <p className="timeline-location">{exp.location}</p>
                            <ul className="timeline-bullets">
                                {exp.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
