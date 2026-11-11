import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import Arrow from '../components/Arrow';
import Brand from '../components/Brand';

export default function Contact() {
    const [agency, setAgency] = useState(false);
    const [prepared, setPrepared] = useState(false);
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        setAgency(new URLSearchParams(window.location.search).get('type') === 'agency');
    }, []);
    function prepare(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const body = [
            `Name: ${formData.get('name')}`,
            `Email: ${formData.get('email')}`,
            `Project type: ${agency ? 'Agency support' : 'Business website'}`,
            `Budget: ${formData.get('budget') || 'To discuss'}`,
            `Timing: ${formData.get('timing') || 'To discuss'}`,
            '',
            String(formData.get('message'))
        ].join('\n');
        window.location.href =
            'mailto:hello@freelancepixels.uk?subject=' +
            encodeURIComponent(agency ? 'Agency development enquiry' : 'Website project enquiry') +
            '&body=' +
            encodeURIComponent(body);
        setPrepared(true);
    }
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText('hello@freelancepixels.uk');
            setCopied(true);
        } catch {
            setCopied(false);
        }
    }
    return (
        <>
            <section className="page-hero shell contact-hero">
                <span className="eyebrow">Discuss your project</span>
                <h1>
                    A short conversation.
                    <br />
                    <em>A sensible starting point.</em>
                </h1>
                <p className="page-lead">
                    Tell me what you need your website to do, or where your agency needs development
                    support. An outline is enough to get started.
                </p>
            </section>
            <section className="shell contact-layout section">
                <div>
                    <span className="eyebrow">Get in touch directly</span>
                    <a className="large-email" href="mailto:hello@freelancepixels.uk">
                        hello@freelancepixels.uk <Arrow />
                    </a>
                    <div className="contact-options">
                        <button type="button" onClick={copyEmail}>
                            {copied ? 'Email copied' : 'Copy email address'}
                        </button>
                    </div>
                    <p className="small-muted">
                        Based in Essex. Working with businesses and agencies across the UK.
                    </p>
                    <div className="next-steps">
                        <h2>What happens next?</h2>
                        <ol>
                            <li>
                                I review your outline and ask any questions needed to understand the
                                work.
                            </li>
                            <li>
                                We discuss the right scope, the responsibilities and the target
                                dates.
                            </li>
                            <li>You receive a written proposal and quote before work begins.</li>
                        </ol>
                    </div>
                </div>
                <div className="brief-builder">
                    <span className="eyebrow">Prefer a starting point?</span>
                    <h2>Put a short brief together.</h2>
                    {agency && <p className="enquiry-context">Agency development enquiry</p>}
                    <p>
                        This helper prepares an email in your email app. You review it and send it
                        to me.
                    </p>
                    <form onSubmit={prepare}>
                        <div className="form-row">
                            <label>
                                Your name
                                <input name="name" autoComplete="name" required />
                            </label>
                            <label>
                                Your email
                                <input name="email" type="email" autoComplete="email" required />
                            </label>
                        </div>
                        <label>
                            What would you like help with?
                            <textarea
                                name="message"
                                rows={5}
                                placeholder={
                                    agency
                                        ? 'The designs or brief, the development you need, and anything useful to know.'
                                        : 'What your business does, what you have now, and what needs to change.'
                                }
                                required
                            />
                        </label>
                        <details className="optional-details">
                            <summary>
                                Add project type, budget or timing <span>Optional +</span>
                            </summary>
                            <label>
                                Enquiry for
                                <select
                                    value={agency ? 'agency' : 'business'}
                                    onChange={(event) => setAgency(event.target.value === 'agency')}
                                >
                                    <option value="business">My business</option>
                                    <option value="agency">An agency project</option>
                                </select>
                            </label>
                            <div className="form-row">
                                <label>
                                    Budget (optional)
                                    <input name="budget" placeholder="A range or let's discuss" />
                                </label>
                                <label>
                                    Timing (optional)
                                    <input name="timing" placeholder="A date or rough timeframe" />
                                </label>
                            </div>
                        </details>
                        <button className="button" type="submit">
                            Prepare project email <Arrow />
                        </button>
                        <p className="form-status" role="status">
                            {prepared
                                ? 'Your email app should open with your brief ready to review and send. You can also contact me directly using the address alongside.'
                                : 'Opens your email app. Nothing is sent automatically.'}
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}
