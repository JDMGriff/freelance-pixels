const questions = [
    [
        'How much will the website cost?',
        'I quote around the scope: the pages, design, functionality, content and launch work you need. We agree a written proposal before work starts. If you have a budget in mind, include it in your enquiry.'
    ],
    [
        'Will I be able to update it myself?',
        'Yes. The WordPress editing setup is designed around your content and your team. Custom fields and reusable sections handle everyday changes, with a handover to show you how it works.'
    ],
    [
        'Do you work with agencies?',
        'Yes. I can work alongside your designers and project team on custom WordPress builds, front-end components and further development. We agree responsibilities and delivery requirements as part of the brief.'
    ],
    [
        'What do you need to get started?',
        'A short outline is enough to begin: what your business does, the website or designs you have now and what needs to change. We can work through the finer detail together.'
    ]
];
export default function FAQ() {
    return (
        <div className="faq-list">
            {questions.map(([question, answer]) => (
                <details key={question}>
                    <summary>
                        {question}
                        <span aria-hidden="true">+</span>
                    </summary>
                    <p>{answer}</p>
                </details>
            ))}
        </div>
    );
}
