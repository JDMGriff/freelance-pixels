import { projects } from './data/projects';
import { serviceContent } from './data/services';
export interface Route {
    path: string;
    page: string;
    slug: string;
    title: string;
}
export const routes: Route[] = [
    { path: '/', page: 'home', slug: '', title: 'Web design & custom WordPress' },
    {
        path: '/websites-for-businesses/',
        page: 'businesses',
        slug: '',
        title: 'Websites for businesses'
    },
    {
        path: '/for-agencies/',
        page: 'agencies',
        slug: '',
        title: 'Freelance development for agencies'
    },
    { path: '/services/', page: 'services', slug: '', title: 'Services' },
    { path: '/work/', page: 'work', slug: '', title: 'Work' },
    { path: '/about/', page: 'about', slug: '', title: 'About' },
    { path: '/contact/', page: 'contact', slug: '', title: 'Contact' },
    {
        path: '/approach/',
        page: 'approach',
        slug: '',
        title: 'WordPress boilerplate & hybrid editing'
    },
    ...Object.keys(serviceContent).map((slug) => ({
        path: `/services/${slug}/`,
        page: 'service-detail',
        slug,
        title: slug.replaceAll('-', ' ')
    })),
    ...projects.map((project) => ({
        path: `/work/${project.slug}/`,
        page: 'project-detail',
        slug: project.slug,
        title: project.name
    }))
];
export function findRoute(pathname: string) {
    const path = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
    return routes.find((route) => route.path === path);
}
