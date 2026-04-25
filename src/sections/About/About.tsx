import React from 'react';
import './About.css';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { profile } from '../../data/profile';
import { education, courses } from '../../data/experience';

export const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <SectionTitle title="Sobre mí" />

            <div className="about-grid">
                <div className="about-bio">
                    <p className="bio-text">{profile.bio}</p>
                </div>

                <div className="about-education">
                    <h3>Formación</h3>
                    {education.map((edu, index) => (
                        <div key={index} className="edu-card glass">
                            <h4>{edu.degree}</h4>
                            <p className="edu-inst">{edu.institution}</p>
                            <p className="edu-period">{edu.period} | {edu.location}</p>
                        </div>
                    ))}

                    <div className="courses-list">
                        <h4>Cursos & Certificaciones</h4>
                        <ul>
                            {courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
