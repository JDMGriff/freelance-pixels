export function AudiencePage({ agency = false }: { agency?: boolean }) {
    return (
        <>
            <section className="page-hero shell">
                <span className="eyebrow">
                    {agency ? 'For creative & digital agencies' : 'For business owners'}
                </span>
                <h1>
                    {agency ? (
                        <>
                            Your designs.
                            <br />
                            <em>An experienced developer.</em>
                        </>
                    ) : (
                        <>
                            A website that explains
                            <br />
                            <em>why people should choose you.</em>
                        </>
                    )}
                </h1>
                <p className="page-lead">
                    {agency
                        ? 'Freelance WordPress and front-end development, working alongside your designers and project team. Bespoke builds, structured content and practical delivery support.'
                        : 'A new website or a considered redesign, with one person taking care of the visual design, WordPress development and content editing setup.'}
                </p>
                <a className="button" href={'/contact/?type=' + (agency ? 'agency' : 'business')}>
                    Discuss your project <span>↗</span>
                </a>
            </section>
            <section className="shell section split-section">
                <div>
                    <span className="eyebrow">
                        {agency ? 'Where I can help' : 'Start with what the website needs to do'}
                    </span>
                    <h2>
                        {agency ? (
                            <>
                                Additional capacity.
                                <br />
                                Clear responsibility.
                            </>
                        ) : (
                            <>
                                Explain your services.
                                <br />
                                Show your expertise.
                                <br />
                                Invite the next step.
                            </>
                        )}
                    </h2>
                    <p>
                        {agency
                            ? 'I currently work as a Lead Front End Developer. My background includes collaborating with designers, project managers and account teams inside digital agencies.'
                            : 'We work out what your visitors need to understand, what gives them confidence and how they should contact you. Those decisions shape the pages and design.'}
                    </p>
                </div>
                <div className="numbered-list">
                    {(agency
                        ? [
                              [
                                  'Build from your designs',
                                  'Responsive WordPress themes, ACF Blocks and structured content developed around approved designs and functional requirements.'
                              ],
                              [
                                  'Collaborate with the team',
                                  'Direct communication on scope, feedback and technical decisions. We agree the codebase, delivery responsibilities and handover before starting.'
                              ],
                              [
                                  'Help get it live',
                                  'Testing, agreed integrations, migrations and launch tasks can be included in the brief. Further development can be scoped when needed.'
                              ]
                          ]
                        : [
                              [
                                  'Plan the right pages',
                                  'Organise your services, work and supporting information around the questions your customers are asking.'
                              ],
                              [
                                  'Design and build together',
                                  'A bespoke visual direction, developed into a responsive WordPress website with the forms and agreed features it needs.'
                              ],
                              [
                                  'Manage it after handover',
                                  'A structured editing setup and guidance for updating the website. Content responsibilities, hosting and further support are discussed during scoping.'
                              ]
                          ]
                    ).map(([title, description], index) => (
                        <article key={title}>
                            <span className="number">0{index + 1}</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="panel-section section">
                <div className="shell split-section">
                    <div>
                        <span className="eyebrow">Included in the conversation</span>
                        <h2>
                            A clear scope.
                            <br />A written quote.
                        </h2>
                    </div>
                    <div>
                        <p>
                            {agency
                                ? 'Send the designs or project outline, the functionality you need and the target dates. We can establish the development scope, responsibilities and cost before any work is commissioned.'
                                : 'Tell me what your business does, what you have now and what needs to change. We can discuss the pages, design, content and functionality, then agree a written proposal.'}
                        </p>
                        <ul className="check-list">
                            {(agency
                                ? [
                                      'Bespoke themes, PHP and custom ACF Blocks',
                                      'Tailwind CSS, JavaScript and Webpack',
                                      'Custom post types and integrations',
                                      'Testing, Git and deployment requirements'
                                  ]
                                : [
                                      'Page structure and visual design',
                                      'Custom WordPress development',
                                      'An editing setup for your team',
                                      'Testing, launch and handover'
                                  ]
                            ).map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="small-muted">
                            {agency
                                ? 'Tools and processes are agreed around the project.'
                                : 'Copywriting, content entry, hosting arrangements and ongoing support are discussed separately so responsibilities are clear.'}
                        </p>
                        <a
                            className="text-link"
                            href={'/contact/?type=' + (agency ? 'agency' : 'business')}
                        >
                            Discuss your project <span>↗</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="shell section">
                <div className="section-heading">
                    <span className="eyebrow">Relevant work</span>
                    <h2>See where I was involved.</h2>
                </div>
                <div className="related-work">
                    <a href="/work/hilson/">
                        <img
                            src="/images/projects/hilson-1.jpg"
                            alt="Hilson Moran desktop website design"
                            loading="lazy"
                        />
                        <h3>
                            Hilson Moran <span>↗</span>
                        </h3>
                        <p>UI/UX design & WordPress build</p>
                    </a>
                    <a href="/work/onehub/">
                        <img
                            src="/images/projects/onehub-1.jpg"
                            alt="OneHub Southend website design"
                            loading="lazy"
                        />
                        <h3>
                            OneHub Southend <span>↗</span>
                        </h3>
                        <p>UI/UX design & WordPress build</p>
                    </a>
                </div>
                <p className="small-muted work-attribution">
                    Selected work includes projects delivered in agency roles.
                </p>
            </section>
        </>
    );
}
