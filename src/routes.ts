import { projects } from './data/projects';
import { serviceContent } from './data/services';

export interface Route {
    path: string;
    page: string;
    slug: string;
    title: string;
    description: string;
}

const serviceMetadata: Record<string, { title: string; description: string }> = {
    'web-design': {
        title: 'Bespoke Web Design in Essex',
        description:
            'Bespoke website design built around your brand, audience and goals. Clear page structure, responsive layouts and a straightforward route to enquiry.'
    },
    'wordpress-development': {
        title: 'Custom WordPress Development & ACF Blocks',
        description:
            'Custom WordPress themes built on my own boilerplate, with bespoke ACF Blocks, structured content and hybrid FSE editing tailored to your business.'
    },
    'development-support': {
        title: 'WordPress & Front-End Development Support',
        description:
            'Freelance WordPress and front-end support for businesses and agencies. Help with responsive issues, performance, migrations, integrations and launches.'
    }
};

const projectDescriptions: Record<string, string> = {
    'ink-digital':
        'WordPress development for Ink Digital from supplied designs, covering services, sectors and case studies. Completed in my employed role at Ink Digital.',
    'oasis-lmf':
        'UI/UX design and a WordPress build for Oasis LMF using my custom boilerplate. An agency project featuring specialist content, libraries and resources.',
    samiad: 'A WordPress build for Samiad from supplied designs, using my custom boilerplate and ACF. An agency project connecting programmes, campuses and enquiries.',
    'do-not-disturb':
        'WordPress development for Do Not Disturb from supplied designs. An agency project bringing destinations, travel inspiration and enquiry routes together.',
    hilson: 'UI/UX design and WordPress development for Hilson Moran, completed in an agency role. Explore archived desktop designs and mobile project browsing.',
    onehub: 'Website design and WordPress development for OneHub Southend, completed in an agency role. Workspace information, responsive layouts and enquiry routes.',
    'furniture-makers':
        'UI/UX design and a WordPress build for The Furniture Makers Company, completed in an agency role. Explore the charity website and responsive layouts.',
    dalau: 'UI/UX design and WordPress development for specialist manufacturer Dalau. An agency project presenting products, capabilities and company information.',
    'power-sonic':
        'UI/UX design for PowerSonic, completed in an agency role. Archived desktop and mobile designs showing product navigation and battery applications.',
    'talis-projects':
        'WordPress development for Talis Projects from supplied designs, completed in an agency role. Responsive pages presenting commercial interiors and services.',
    'apollo-dental':
        'A WordPress build for Apollo Dental from supplied designs, completed in an agency role. Archived examples of the practice website on desktop and mobile.',
    im: 'UI/UX design for Investing Matters, completed in an agency role. Editorial layouts organising market news, featured video and category content.'
};

export const routes: Route[] = [
    {
        path: '/',
        page: 'home',
        slug: '',
        title: 'Freelance Web Design & WordPress in Essex',
        description:
            'Freelance web design and custom WordPress development in Essex. Bespoke websites for businesses and experienced development support for agencies.'
    },
    {
        path: '/websites-for-businesses/',
        page: 'businesses',
        slug: '',
        title: 'Bespoke Websites for Businesses in Essex',
        description:
            'Launch or redesign your business website with one freelancer handling design, WordPress development and a practical editing setup for your team.'
    },
    {
        path: '/for-agencies/',
        page: 'agencies',
        slug: '',
        title: 'Freelance WordPress Developer for Agencies',
        description:
            'Need extra development capacity? I build custom WordPress themes and ACF Blocks from your approved designs, working alongside your agency team.'
    },
    {
        path: '/services/',
        page: 'services',
        slug: '',
        title: 'Web Design & WordPress Development Services',
        description:
            'Explore bespoke web design, custom WordPress builds and development support. Based in Essex, working with businesses and agencies across the UK.'
    },
    {
        path: '/work/',
        page: 'work',
        slug: '',
        title: 'Web Design & WordPress Projects',
        description:
            'Explore my web design and WordPress development work, including projects delivered in agency roles, with clear details of my contribution to each.'
    },
    {
        path: '/about/',
        page: 'about',
        slug: '',
        title: 'About Your Freelance Designer & Developer',
        description:
            'Meet the designer and developer behind Freelance Pixels. Based in Essex, with over 15 years of experience in web, digital design and agency delivery.'
    },
    {
        path: '/contact/',
        page: 'contact',
        slug: '',
        title: 'Discuss Your Website Project',
        description:
            'Need a new website, a WordPress build or agency development support? Email Freelance Pixels to discuss your brief, requirements and target dates.'
    },
    {
        path: '/approach/',
        page: 'approach',
        slug: '',
        title: 'WordPress Boilerplate & Hybrid FSE Editing',
        description:
            'Explore my custom WordPress boilerplate, bespoke ACF Blocks and hybrid FSE editing: reusable components and content controls shaped around your team.'
    },
    ...Object.entries(serviceContent).map(([slug, service]) => ({
        path: `/services/${slug}/`,
        page: 'service-detail',
        slug,
        title: serviceMetadata[slug]?.title ?? service.title,
        description: serviceMetadata[slug]?.description ?? service.intro
    })),
    ...projects.map((project) => ({
        path: `/work/${project.slug}/`,
        page: 'project-detail',
        slug: project.slug,
        title: `${project.name} | ${project.role.replace('UI/UX design & WordPress build', 'Design & WordPress').replace('WordPress development', 'WordPress Build').replace('UI/UX design', 'UI/UX Design')}`,
        description: projectDescriptions[project.slug] ?? project.intro
    }))
];

export function findRoute(pathname: string) {
    const path = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
    return routes.find((route) => route.path === path);
}
