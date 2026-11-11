import { projects } from '../data/projects';
import Arrow from './Arrow';

export default function WorkCards({ all = false }: { all?: boolean }) {
    return (
        <div className={'work-grid ' + (all ? 'all-work' : '')}>
            {(all ? projects : projects.slice(0, 2)).map((project) => (
                <a className="work-card" href={'/work/' + project.slug + '/'} key={project.slug}>
                    <div className="work-image">
                        <img
                            src={project.images[0].src}
                            alt={project.name + ' website project'}
                            loading="lazy"
                        />
                        <span className="work-open">
                            <Arrow />
                        </span>
                    </div>
                    <div className="work-card-title">
                        <h3>{project.name}</h3>
                        <span>{project.type}</span>
                    </div>
                    <p>{project.role}</p>
                </a>
            ))}
        </div>
    );
}
