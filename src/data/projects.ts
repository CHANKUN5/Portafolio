import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'base-asistance',
        title: 'BaseAsistance',
        description: 'TimeControl es una solución empresarial de vanguardia para la gestión del tiempo y la productividad. Diseñada con una arquitectura robusta y una interfaz de usuario minimalista.',
        stack: ['React', 'TypeScript', 'Supabase', 'Vite'],
        codeUrl: 'https://github.com/CHANKUN5/BaseAsistance',
        demoUrl: 'https://base-asistance.vercel.app',
        image: '/projects/TimeControl.png',
        featured: true,
    },
    {
        id: 'blog-nextjs',
        title: 'Blogger ',
        description: 'Plataforma de blog optimizada para SEO y rendimiento. Utiliza renderizado en el lado del servidor y una interfaz minimalista para priorizar la legibilidad.',
        stack: ['Next.js', 'TypeScript', 'Tailwind', 'Blogger Path'],
        codeUrl: 'https://github.com/CHANKUN5/Blogger',
        demoUrl: 'https://blogger-bay.vercel.app',
        image: '/projects/Blogger.png',
        featured: true,
    },
    {
        id: 'marketing-medico',
        title: 'Marketing Médico',
        description: 'Página de aterrizaje corporativa enfocada en el sector salud. Implementa animaciones fluidas y un sistema de agendamiento simplificado.',
        stack: ['React', 'Vite', 'Framer Motion', 'Bootstrap'],
        codeUrl: 'https://github.com/CHANKUN5/MarketingMedico',
        demoUrl: 'https://marketing-medico.vercel.app',
        image: '/projects/MarketingMedico.png',
        featured: true,
    },
    {
        id: 'arte-ideas',
        title: 'Arte & Ideas',
        description: 'Link demo: Sistema de gestión para estudio fotográfico. Diseñé e implementé una aplicación web completa con módulos de gestión de clientes e inventario.',
        stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        codeUrl: 'https://github.com/CHANKUN5/ArteIdeas',
        demoUrl: 'https://fotostudio-2025.web.app',
        image: '/projects/ArteIdeas.png',
        featured: true,
    }
];
