import Brand from './Brand';
import Arrow from './Arrow';

export default function Footer({ agency = false }: { agency?: boolean }) {
    return (
        <>
            <section className="closing-cta">
                <div className="shell closing-inner">
                    <div>
                        <span className="eyebrow">Your next step</span>
                        <h2>
                            Tell me what
                            <br />
                            you have in mind.
                        </h2>
                    </div>
                    <div>
                        <p>
                            A website brief, an existing site or designs ready to build. We can work
                            out the scope and next steps together.
                        </p>
                        <a className="button" href={agency ? '/contact/?type=agency' : '/contact/'}>
                            Discuss your project <Arrow />
                        </a>
                        <a className="cta-email" href="mailto:hello@freelancepixels.uk">
                            hello@freelancepixels.uk
                        </a>
                    </div>
                </div>
            </section>
            <footer className="site-footer shell">
                <div className="footer-main">
                    <Brand />
                    <nav aria-label="Footer navigation">
                        <a href="/">Home</a>
                        <a href="/services/">Services</a>
                        <a href="/work/">Work</a>
                        <a href="/websites-for-businesses/">For businesses</a>
                        <a href="/for-agencies/">For agencies</a>
                        <a href="/approach/">Approach</a>
                        <a href="/about/">About</a>
                        <a href={agency ? '/contact/?type=agency' : '/contact/'}>Contact</a>
                    </nav>
                    <div className="footer-contact">
                        <a href="mailto:hello@freelancepixels.uk">hello@freelancepixels.uk</a>
                        <span>Essex, UK</span>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Freelance Pixels</span>
                    <span>Independent web design & custom WordPress development.</span>
                </div>
            </footer>
        </>
    );
}
