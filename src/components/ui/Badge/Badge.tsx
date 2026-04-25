import React from 'react';
import './Badge.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'outline' | 'filled';
    color?: string;
    backgroundColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'outline',
    color,
    backgroundColor
}) => {
    const style = backgroundColor ? {
        backgroundColor,
        color: color || '#fff',
        borderColor: 'transparent'
    } : {};

    return (
        <span className={`badge badge-${variant}`} style={style}>
            {children}
        </span>
    );
};
