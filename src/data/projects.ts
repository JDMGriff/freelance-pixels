import projectData from '../../content/projects.json';
export interface ProjectImage {
    src: string;
    caption: string;
    width: number;
    height: number;
    crop?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export interface Project {
    name: string;
    slug: string;
    type: string;
    role: string;
    tools: string;
    intro: string;
    overview: string;
    focus: string[][];
    images: ProjectImage[];
    status?: string;
    attribution: string;
    websiteUrl?: string;
    websiteLabel?: string;
    websiteNote?: string;
}
export const projects: Project[] = projectData;
export const projectDetails: Record<string, Project> = Object.fromEntries(
    projects.map((project) => [project.slug, project])
);
