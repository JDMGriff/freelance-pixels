import Arrow from '../components/Arrow';

export default function About() {
    return (
        <>
            <section className="page-hero shell">
                <span className="eyebrow">About Freelance Pixels</span>
                <h1>
                    I'm Ian.
                    <br />
                    <em>I design and build websites.</em>
                </h1>
                <p className="page-lead">
                    An independent web designer and front-end developer based in Essex, with over 15
                    years of experience in web and digital design.
                </p>
            </section>
            <section className="shell section split-section">
                <div className="about-statement">
                    <span className="eyebrow">One person, from brief to build</span>
                    <h2>
                        A design background.
                        <br />A development mindset.
                    </h2>
                    <div className="about-facts">
                        <strong>
                            15+<span>Years in web & digital design</span>
                        </strong>
                        <strong>
                            Direct<span>Work with the person doing the work</span>
                        </strong>
                    </div>
                </div>
                <div>
                    <p className="lead">
                        I've worked directly with businesses and inside creative and digital
                        agencies, bringing visual design and technical delivery together.
                    </p>
                    <p>
                        I currently work as a Lead Front End Developer. My work includes custom
                        WordPress themes and ACF Blocks, responsive front-end development, launches,
                        migrations, performance work and technical troubleshooting.
                    </p>
                    <p>
                        Freelance Pixels is where I bring that experience to business websites and
                        agency development projects. You speak directly with me about the brief,
                        design decisions and build.
                    </p>
                    <a className="text-link" href="/approach/">
                        Read about my build approach <Arrow />
                    </a>
                </div>
            </section>
            <section className="panel-section section">
                <div className="shell split-section">
                    <div>
                        <span className="eyebrow">Relevant experience</span>
                        <h2>
                            Agency delivery.
                            <br />
                            Hands-on development.
                        </h2>
                    </div>
                    <div className="experience-list">
                        {[
                            ['2025 - present', 'Ink Digital', 'Lead Front End Developer'],
                            ['2021 - 2022 / 2023 - 2025', 'Revive Digital', 'Front End Developer'],
                            ['2022 - 2023', 'Never What If', 'Junior Full Stack Developer'],
                            ['2018 - 2021', 'Page Creative', 'Designer / Front End Developer']
                        ].map(([date, name, role]) => (
                            <article key={name}>
                                <span>{date}</span>
                                <h3>{name}</h3>
                                <p>{role}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
