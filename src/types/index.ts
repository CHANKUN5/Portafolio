export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    demoUrl?: string;
    codeUrl: string;
    image: string;
    featured?: boolean;
}

export interface SkillGroup {
    category: string;
    icon: string;
    skills: string[];
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
}

export interface SocialLink {
    label: string;
    url: string;
    icon: 'github' | 'linkedin' | 'mail';
}

export interface Profile {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    socials: SocialLink[];
}
