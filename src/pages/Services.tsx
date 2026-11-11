import Arrow from '../components/Arrow';
import FAQ from '../components/FAQ';

export default function Services() {
    return (
        <>
            <section className="page-hero shell">
                <span className="eyebrow">Services</span>
                <h1>
                    Design, development
                    <br />
                    <em>and the details between.</em>
                </h1>
                <p className="page-lead">
                    A complete website for your business, WordPress development from your designs,
                    or focused support for the site you already have.
                </p>
            </section>
            <section className="shell section service-offers">
                {[
                    [
                        '01',
                        'Web design',
                        'Plan a clear structure and a visual direction that fits your business.',
                        'Page planning / UI & UX / Responsive design',
                        'web-design'
                    ],
                    [
                        '02',
                        'Custom WordPress development',
                        'Turn the design into a bespoke, manageable website with the content structures and functionality it needs.',
                        'Custom themes / ACF Blocks / PHP & Tailwind',
                        'wordpress-development'
                    ],
                    [
                        '03',
                        'Development support',
                        'Get practical help with an existing website or additional capacity for your agency.',
                        'Front-end development / Migrations / Integrations',
                        'development-support'
                    ]
                ].map(([number, title, description, stack, slug]) => (
                    <a href={'/services/' + slug + '/'} key={number}>
                        <span className="number">{number}</span>
                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <span className="service-tools">{stack}</span>
                        </div>
                        <Arrow />
                    </a>
                ))}
            </section>
            <section className="panel-section section">
                <div className="shell split-section">
                    <div>
                        <span className="eyebrow">How we get from brief to launch</span>
                        <h2>
                            Clear decisions.
                            <br />A clear next step.
                        </h2>
                    </div>
                    <div className="numbered-list">
                        {[
                            [
                                'Scope',
                                'We establish what you need, the content responsibilities and the features to include. You receive a written scope, quote and timeline.'
                            ],
                            [
                                'Design',
                                'We review the page structure and visual direction before development begins.'
                            ],
                            [
                                'Build',
                                'I develop the agreed design, configure the editing setup and test across screen sizes and browsers.'
                            ],
                            [
                                'Launch',
                                'Following final review, I handle the agreed launch tasks and show you how to manage the content.'
                            ]
                        ].map(([title, description], index) => (
                            <article key={title}>
                                <span className="number">0{index + 1}</span>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="shell section commissioning-links">
                <a href="/websites-for-businesses/">
                    <span className="eyebrow">For business owners</span>
                    <h3>
                        Plan your website <Arrow />
                    </h3>
                </a>
                <a href="/for-agencies/">
                    <span className="eyebrow">For agency teams</span>
                    <h3>
                        Discuss development support <Arrow />
                    </h3>
                </a>
            </section>
            <section className="shell section faq-section">
                <div>
                    <span className="eyebrow">Scope & cost</span>
                    <h2>Before you commit.</h2>
                </div>
                <FAQ />
            </section>
        </>
    );
}
