import React, { useState, useRef } from 'react';
import './Contact.css';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { Button } from '../../components/ui/Button/Button';
import { profile } from '../../data/profile';
import { WhatsAppModal } from '../../components/ui/WhatsAppModal/WhatsAppModal';

export const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isWAModalOpen, setIsWAModalOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current!);

        fetch(`https://formsubmit.co/ajax/${profile.email}`, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true") {
                    setIsSuccess(true);
                } else {
                    throw new Error();
                }
            })
            .catch(() => {
                const name = formData.get('name');
                const message = formData.get('message');
                window.location.href = `mailto:${profile.email}?subject=Contacto de ${name}&body=${message}`;
                setIsSuccess(true);
            })
            .finally(() => {
                setIsSubmitting(false);
                formRef.current?.reset();
            });
    };

    return (
        <section id="contact" className="contact">
            <SectionTitle title="Contáctame" align="center" />

            <div className="contact-container glass">
                <div className="contact-info">
                    <h3>¿Tienes un proyecto en mente?</h3>
                    <p>Estoy abierta a oportunidades laborales y colaboraciones en proyectos innovadores.</p>

                    <div className="contact-methods">
                        <div className="method">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span>{profile.email}</span>
                        </div>
                    </div>

                    <div className="social-links">
                        {profile.socials.map((social, idx) => (
                            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                                {social.icon === 'github' && <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                                {social.icon === 'mail' && <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.713v15.426h-24v-15.426l12 9.713z" /></svg>}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    {isSuccess ? (
                        <div className="success-message">
                            <div className="success-icon">✨</div>
                            <h3>¡Felicitaciones!</h3>
                            <p>Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo muy pronto.</p>
                            <Button variant="outline" onClick={() => setIsSuccess(false)}>Enviar otro</Button>
                        </div>
                    ) : (
                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <input type="hidden" name="_subject" value="Nuevo contacto desde el portafolio" />
                            <input type="hidden" name="_template" value="table" />
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" name="message" rows={4} placeholder="¿En qué puedo ayudarte?" required></textarea>
                            </div>
                            <Button variant="primary" type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </Button>
                        </form>
                    )}
                </div>
            </div>

            <WhatsAppModal
                isOpen={isWAModalOpen}
                onClose={() => setIsWAModalOpen(false)}
                phoneNumber={profile.phone}
            />
        </section>
    );
};
