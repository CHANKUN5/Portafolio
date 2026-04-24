import React from 'react';
import './WavyBackground.css';

export const WavyBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="wavy-container">
            <div className="waves">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>
            <div className="wavy-content">
                {children}
            </div>
        </div>
    );
};
