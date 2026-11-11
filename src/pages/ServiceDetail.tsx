import Arrow from '../components/Arrow';
import { serviceContent } from '../data/services';

export default function ServiceDetail({ slug }: { slug: string }) {
    const service = serviceContent[slug];
    return (
        <>
            <section className="page-hero shell">
                <a className="eyebrow breadcrumb" href="/services/">
                    Services / {service.title}
                </a>
                <h1>
                    {service.title}
                    <em>.</em>
                </h1>
                <p className="page-lead">{service.intro}</p>
                <a className="button" href="/contact/">
                    Discuss your project <Arrow />
                </a>
            </section>
            <section className="shell section split-section">
                <div>
                    <span className="eyebrow">Is this the right fit?</span>
                    <h2>{service.fit}</h2>
                </div>
                <div className="numbered-list">
                    {service.items.map(([t, p], index) => (
                        <article key={t}>
                            <span className="number">0{index + 1}</span>
                            <div>
                                <h3>{t}</h3>
                                <p>{p}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="section panel-section">
                <div className="shell split-section">
                    <div>
                        <span className="eyebrow">Scope, agreed around your project</span>
                        <h2>
                            What the work
                            <br />
                            can include.
                        </h2>
                    </div>
                    <div>
                        <ul className="check-list">
                            {service.deliverables.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p>
                            Your proposal sets out the deliverables, costs and responsibilities
                            before work begins.
                        </p>
                        {slug === 'wordpress-development' && (
                            <a className="text-link" href="/approach/">
                                See how the editor works <Arrow />
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
