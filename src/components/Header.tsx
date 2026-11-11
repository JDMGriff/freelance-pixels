import { useState } from 'react';
import Brand from './Brand';
import Arrow from './Arrow';

export default function Header({ agency = false }: { agency?: boolean }) {
    const [open, setOpen] = useState(false);
    return (
        <header className="site-header">
            <div className="shell header-inner">
                <Brand />
                <nav
                    id="mobile-menu"
                    className={open ? 'main-nav is-open' : 'main-nav'}
                    aria-label="Main navigation"
                >
                    <a href="/services/">Services</a>
                    <a href="/work/">Work</a>
                    <a href="/approach/">Approach</a>
                    <a href="/about/">About</a>
                    <a
                        className="button button-small"
                        href={agency ? '/contact/?type=agency' : '/contact/'}
                    >
                        Discuss your project <Arrow />
                    </a>
                </nav>
                <button
                    className="menu-toggle"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '+'}</span>
                </button>
            </div>
        </header>
    );
}
