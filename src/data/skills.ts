import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
    {
        category: 'Lenguajes',
        icon: 'code',
        skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C#'],
    },
    {
        category: 'Frameworks & Librerías',
        icon: 'layers',
        skills: ['React', 'Next.js', 'React Router', 'React Hook Form', 'Zod', 'Axios'],
    },
    {
        category: 'Estilos & UI',
        icon: 'palette',
        skills: ['CSS3', 'Tailwind CSS', 'Bootstrap', 'Diseño Responsivo'],
    },
    {
        category: 'Herramientas',
        icon: 'tool',
        skills: ['Git', 'GitHub', 'Vite', 'Supabase', 'APIs REST'],
    },
    {
        category: 'Arquitectura',
        icon: 'structure',
        skills: ['Feature-Driven', 'Clean Architecture', 'Componentes Reutilizables', 'Server Components'],
    },
];
