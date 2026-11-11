import WorkCards from '../components/WorkCards';

export default function Work() {
    return (
        <>
            <section className="page-hero shell">
                <span className="eyebrow">Selected work</span>
                <h1>
                    The work behind
                    <br />
                    <em>the introduction.</em>
                </h1>
                <p className="page-lead">
                    Commercial website projects, with my involvement identified on each one. Explore
                    the projects, the websites and my contribution to each one.
                </p>
            </section>
            <section className="shell section work-index">
                <WorkCards all />
                <p className="small-muted work-attribution">
                    Selected work includes projects delivered in agency roles. Each case study
                    identifies my involvement in design, development or both.
                </p>
            </section>
        </>
    );
}
