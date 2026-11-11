export const serviceContent: Record<
    string,
    {
        title: string;
        headline: string;
        intro: string;
        items: [string, string][];
        fit: string;
        deliverables: string[];
    }
> = {
    'web-design': {
        title: 'Web design',
        headline: 'A clear identity.\nA confident first impression.',
        intro: 'A website should make it easy for people to understand your business and take the next step. I design clear, distinctive websites around your audience, your content and your goals.',
        items: [
            [
                'A clear structure',
                'Give every page a purpose. We map out the information your visitors need, and a straightforward route from first impression to enquiry.'
            ],
            [
                'A design that feels like you',
                'Your brand, expressed through considered typography, colour, imagery and layout. A coherent visual direction across the whole website.'
            ],
            [
                'Ready for every screen',
                'Responsive layouts that keep your content readable and your calls to action easy to use on phones, tablets and desktops.'
            ]
        ],
        fit: 'For businesses launching a new website or ready to rethink an existing one.',
        deliverables: [
            'Website structure and page planning',
            'Visual direction and page designs',
            'Responsive layouts',
            'Interactive prototypes where useful',
            'A clear route into development'
        ]
    },
    'wordpress-development': {
        title: 'Custom WordPress development',
        headline: 'Your website.\nBuilt your way.',
        intro: 'Built on my own WordPress boilerplate, with a design and component library shaped around your business. Hybrid FSE editing combines Gutenberg with bespoke ACF blocks, giving your team practical control over the content.',
        items: [
            [
                'Hybrid editing, shaped around your team',
                'Gutenberg provides the block editing experience. Bespoke ACF fields give each section clear content controls, while PHP templates carry the design through. We agree the layout options and editing freedom your team needs.'
            ],
            [
                'Built around the content',
                'Services, projects, teams and resources can have their own content structures, so information stays organised as your site grows.'
            ],
            [
                'My own development foundation',
                'An organised boilerplate brings together automatic block registration, ACF field definitions, PHP templates and compiled assets. Reusable groundwork leaves room to focus on the design, content and features specific to your brief.'
            ]
        ],
        fit: 'For businesses that need a flexible website, or agencies with approved designs ready to build.',
        deliverables: [
            'Bespoke WordPress theme',
            'ACF Blocks and structured content',
            'Responsive front-end development',
            'Forms and agreed integrations',
            'Testing, launch and CMS handover'
        ]
    },
    'development-support': {
        title: 'Development & agency support',
        headline: 'Extra capacity.\nExperienced hands.',
        intro: 'Need a developer who can get into the detail and keep work moving? I support businesses and agencies with front-end development, WordPress improvements and the practical work behind a successful launch.',
        items: [
            [
                'Support for your agency',
                'Work with an experienced developer alongside your designers and project team. Clear communication, reusable components and a build that respects the brief.'
            ],
            [
                'Improve the site you have',
                'Investigate responsive problems, performance issues and theme or plugin conflicts. Agree the scope and focus on the changes that matter.'
            ],
            [
                'Keep the technical work moving',
                'Help with migrations, hosting and DNS changes, GA4, Google Tag Manager and consent integrations, scoped around your project.'
            ]
        ],
        fit: 'For agencies needing additional development capacity and businesses with an existing website to improve.',
        deliverables: [
            'Front-end and WordPress development',
            'Technical investigation and fixes',
            'Performance and accessibility improvements',
            'Migrations and launch support',
            'Tracking and integration implementation'
        ]
    }
};
