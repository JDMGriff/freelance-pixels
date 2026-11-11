import { projectDetails } from '../data/projects';
import Arrow from '../components/Arrow';
import ProjectImage from '../components/ProjectImage';

export default function ProjectDetail({ slug }: { slug: string }) {
    const project = projectDetails[slug];
    if (!project)
        return (
            <section className="page-hero shell">
                <h1>Project not found.</h1>
                <a className="text-link" href="/work/">
                    Back to selected work
                </a>
            </section>
        );
    return (
        <>
            <section className="page-hero shell">
                <a className="eyebrow breadcrumb" href="/work/">
                    Selected work / {project.type}
                </a>
                <h1>
                    {project.name}
                    <em>.</em>
                </h1>
                <p className="page-lead">{project.intro}</p>
                <p className="project-attribution">{project.attribution}</p>
                <dl className="project-facts">
                    <div>
                        <dt>My involvement</dt>
                        <dd>{project.role}</dd>
                    </div>
                    <div>
                        <dt>Tools / platform</dt>
                        <dd>{project.tools}</dd>
                    </div>
                    {project.status && (
                        <div>
                            <dt>Examples shown</dt>
                            <dd>{project.status}</dd>
                        </div>
                    )}
                </dl>
                {project.websiteUrl && (
                    <a
                        className="text-link project-website"
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.websiteLabel} <Arrow />
                    </a>
                )}
                {project.websiteNote && (
                    <p className="project-website-note">{project.websiteNote}</p>
                )}
            </section>
            <figure className="shell project-main-image">
                <ProjectImage image={project.images[0]} name={project.name} />
                <figcaption>{project.images[0].caption}</figcaption>
            </figure>
            <section className="shell section split-section">
                <div>
                    <span className="eyebrow">My contribution</span>
                    <h2>{project.role}</h2>
                    <p>{project.overview}</p>
                </div>
                <div className="numbered-list">
                    {project.focus.map(([title, body], index) => (
                        <article key={title}>
                            <span className="number">{String(index + 1).padStart(2, '0')}</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            {project.images.length > 1 && (
                <section
                    className="shell case-gallery"
                    aria-label={project.name + ' website examples'}
                >
                    {project.images.slice(1).map((image) => (
                        <figure key={image.src}>
                            <ProjectImage image={image} name={project.name} />
                            <figcaption>{image.caption}</figcaption>
                        </figure>
                    ))}
                </section>
            )}
            <div className="shell return-to-work">
                <a className="text-link" href="/work/">
                    ← Back to selected work
                </a>
            </div>
        </>
    );
}
