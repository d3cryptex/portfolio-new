export interface TechLogo {
    name: string;
    src: string;
    alt: string;
}

export interface Project {
    title: string;
    description: string;
    stack: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}

export interface CareerPoint {
    year: string;
    title: string;
    text: string;
    tooltip: string;
}