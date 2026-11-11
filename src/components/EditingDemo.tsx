import { useId, useState } from 'react';

export default function EditingDemo() {
    const [heading, setHeading] = useState('A space to do your best work.');
    const [layout, setLayout] = useState('split');
    const id = useId();
    return (
        <div className="editor-demo">
            <div className="editor-toolbar">
                <span className="editor-indicator" />
                Content editor <span>Illustrative example</span>
            </div>
            <div className={'editor-preview ' + (layout === 'stacked' ? 'stacked' : '')}>
                <div>
                    <span className="editor-eyebrow">Your business</span>
                    <strong>{heading || 'Your headline goes here.'}</strong>
                    <p>Built around your content, within a consistent design.</p>
                    <span className="editor-faux-button">Find out more ↗</span>
                </div>
                <div className="editor-composition" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                </div>
            </div>
            <div className="editor-fields">
                <label htmlFor={id}>
                    Try changing the headline
                    <input
                        id={id}
                        maxLength={65}
                        value={heading}
                        onChange={(event) => setHeading(event.target.value)}
                    />
                </label>
                <fieldset>
                    <legend>Layout</legend>
                    <button
                        type="button"
                        aria-pressed={layout === 'split'}
                        onClick={() => setLayout('split')}
                    >
                        Split
                    </button>
                    <button
                        type="button"
                        aria-pressed={layout === 'stacked'}
                        onClick={() => setLayout('stacked')}
                    >
                        Stacked
                    </button>
                </fieldset>
            </div>
            <p className="editor-note">
                An illustration of structured editing. The WordPress fields and layout options are
                agreed for your project.
            </p>
        </div>
    );
}
