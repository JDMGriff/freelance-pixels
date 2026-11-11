import EditingDemo from '../components/EditingDemo';

export default function ApproachPage() {
    return (
        <>
            <section className="page-hero shell">
                <span className="eyebrow">The build approach</span>
                <h1>
                    Custom on the outside.
                    <br />
                    <em>Manageable on the inside.</em>
                </h1>
                <p className="page-lead">
                    Your team should be able to publish content without rebuilding the design. I
                    combine a bespoke WordPress theme with reusable components and a hybrid editing
                    setup.
                </p>
            </section>
            <section className="shell split-section section">
                <div>
                    <span className="eyebrow">Gutenberg + ACF</span>
                    <h2>
                        Useful editing freedom.
                        <br />A consistent website.
                    </h2>
                    <p>
                        Use the WordPress block editor to put pages together from agreed sections.
                        Clear ACF fields let you update the copy, images and links inside each
                        component.
                    </p>
                    <p>
                        PHP templates handle the front-end presentation. We decide which layout
                        options your team needs and where the design should stay fixed.
                    </p>
                    <p className="small-muted">
                        Hybrid FSE editing is configured around the build. Site-wide and template
                        editing capabilities are agreed in the project scope.
                    </p>
                </div>
                <EditingDemo />
            </section>
            <section className="section panel-section">
                <div className="shell split-section">
                    <div>
                        <span className="eyebrow">My own WordPress boilerplate</span>
                        <h2>
                            The repeatable groundwork.
                            <br />
                            Your individual website.
                        </h2>
                    </div>
                    <div>
                        <p>
                            My starter theme brings together the common development setup, block
                            registration and component structure. Your visual design and
                            project-specific features are developed around the brief.
                        </p>
                        <ul className="check-list">
                            <li>ACF blocks with clearly defined content fields</li>
                            <li>PHP templates and reusable components</li>
                            <li>Tailwind CSS and compiled Webpack assets</li>
                            <li>Git-based source control and a structured deployment workflow</li>
                        </ul>
                        <p>
                            That gives future development a consistent foundation to work from,
                            whether you need another content type, a new section or an integration.
                        </p>
                    </div>
                </div>
            </section>
            <section className="shell section">
                <div className="section-heading">
                    <span className="eyebrow">Everyday tasks</span>
                    <h2>What your team can do.</h2>
                </div>
                <div className="three-columns">
                    {[
                        [
                            'Update a service',
                            'Change its text, images and calls to action through labelled fields.'
                        ],
                        [
                            'Create another page',
                            'Combine the available sections and add your content within the design system.'
                        ],
                        [
                            'Keep information organised',
                            'Use appropriate content structures for services, projects, teams or resources.'
                        ]
                    ].map(([title, description]) => (
                        <article className="plain-feature" key={title}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </article>
                    ))}
                </div>
                <details className="technical-details">
                    <summary>
                        For agencies: the implementation details<span>+</span>
                    </summary>
                    <p>
                        Components keep block.json registration, exported ACF field definitions and
                        PHP rendering templates together. The theme registers the blocks and fields
                        automatically. Content is managed through Gutenberg and ACF, while PHP,
                        Tailwind CSS and compiled JavaScript provide the front end.
                    </p>
                </details>
            </section>
        </>
    );
}
