import Arrow from '../components/Arrow';
import WorkCards from '../components/WorkCards';
import FAQ from '../components/FAQ';
import EditingDemo from '../components/EditingDemo';

export default function Home() {
    return (
        <>
            <section className="home-hero shell calm-hero">
                <div className="calm-hero-copy">
                    <h1>
                        Freelance web design.
                        <br />
                        <em>Custom WordPress.</em>
                    </h1>
                    <p>
                        Bespoke websites for businesses. Experienced development support for
                        agencies.
                    </p>
                    <a className="button" href="/contact/">
                        Discuss your project <Arrow />
                    </a>
                </div>
            </section>
            <section className="shell home-work" id="selected-work">
                <div className="compact-heading">
                    <span className="eyebrow">Selected commercial work</span>
                    <a className="text-link" href="/work/">
                        View all work <Arrow />
                    </a>
                </div>
                <WorkCards />
                <p className="small-muted work-attribution">
                    Selected work includes projects delivered in agency roles.
                </p>
            </section>
            <section className="shell section">
                <div className="section-heading split-heading">
                    <div>
                        <span className="eyebrow">Find the right support</span>
                        <h2>
                            Where are you
                            <br />
                            with your website?
                        </h2>
                    </div>
                    <p>
                        A full design and build, development from your designs, or practical help
                        with a site you already have.
                    </p>
                </div>
                <div className="service-routes">
                    {[
                        [
                            '01',
                            'A new website or a redesign',
                            'For businesses that need a clear, credible website and one person to take it from brief to launch.',
                            '/websites-for-businesses/'
                        ],
                        [
                            '02',
                            'Designs ready for development',
                            'For agencies and designers looking for an experienced WordPress developer to deliver the build.',
                            '/for-agencies/'
                        ],
                        [
                            '03',
                            'An existing site needs attention',
                            'For responsive issues, performance improvements, migrations and further WordPress development.',
                            '/services/development-support/'
                        ]
                    ].map(([number, title, description, url]) => (
                        <a href={url} key={number}>
                            <span className="number">{number}</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <Arrow />
                        </a>
                    ))}
                </div>
            </section>
            <section className="panel-section section">
                <div className="shell split-section editing-intro">
                    <div>
                        <span className="eyebrow">A better way to manage your content</span>
                        <h2>
                            Your design.
                            <br />
                            Your content.
                            <br />
                            <em>Your room to grow.</em>
                        </h2>
                        <p>
                            I build on my own WordPress boilerplate, with bespoke ACF components and
                            a hybrid editing setup.
                        </p>
                        <p>
                            Your team can update content and build pages from agreed sections, while
                            the theme keeps the design consistent.
                        </p>
                        <a className="text-link" href="/approach/">
                            Explore the build approach <Arrow />
                        </a>
                    </div>
                    <EditingDemo />
                </div>
            </section>
            <section className="shell section personal-intro">
                <div>
                    <span className="eyebrow">The person doing the work</span>
                    <h2>
                        Design experience.
                        <br />
                        Development responsibility.
                    </h2>
                </div>
                <div>
                    <p className="lead">
                        From the first design decision to the details behind the scenes, you work
                        with me.
                    </p>
                    <p>
                        My background spans UI/UX design, front-end development and agency delivery.
                        I currently work as a Lead Front End Developer, building custom WordPress
                        sites and supporting live client websites.
                    </p>
                    <a className="text-link" href="/about/">
                        More about my experience <Arrow />
                    </a>
                </div>
            </section>
            <section className="shell section faq-section">
                <div>
                    <span className="eyebrow">Before we talk</span>
                    <h2>A few useful answers.</h2>
                </div>
                <FAQ />
            </section>
        </>
    );
}
