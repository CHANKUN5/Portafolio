import React from 'react';
import './Badge.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'outline' | 'filled';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline' }) => {
    return (
        <span className={`badge badge-${variant}`}>
            {children}
        </span>
    );
};
