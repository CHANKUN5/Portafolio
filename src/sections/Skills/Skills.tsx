import React from 'react';
import './Skills.css';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { skillGroups } from '../../data/skills';

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills">
            <SectionTitle
                title="Habilidades Técnicas"
                subtitle="Mi stack de tecnologías y herramientas para el desarrollo web moderno."
            />

            <div className="skills-grid">
                {skillGroups.map((group, index) => (
                    <div key={index} className="skill-group glass">
                        <div className="skill-group-header">
                            <span className="skill-group-title">{group.category}</span>
                        </div>
                        <div className="skill-list">
                            {group.skills.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <span className="skill-dot"></span>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
