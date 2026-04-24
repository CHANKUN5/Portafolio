import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => {
    return (
        <div className={`section-header align-${align}`}>
            <h2 className="section-title">
                <span className="dot">.</span>{title}
            </h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <div className="title-underline"></div>
        </div>
    );
};
