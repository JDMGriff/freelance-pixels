import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Brand from './components/Brand';
import ApproachPage from './pages/Approach';
import { AudiencePage } from './pages/Audience';

export default function App({ page = 'home', slug = '' }: { page?: string; slug?: string }) {
    return (
        <>
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <Header agency={page === 'agencies'} />
            <main id="main">{renderPage(page, slug)}</main>
            {page !== 'contact' ? (
                <Footer agency={page === 'agencies'} />
            ) : (
                <footer className="contact-footer shell">
                    <Brand />
                    <span>© {new Date().getFullYear()} Freelance Pixels · Essex, UK</span>
                    <a href="/">Back to home</a>
                </footer>
            )}
        </>
    );
}

function renderPage(page: string, slug: string) {
    switch (page) {
        case 'home':
            return <Home />;
        case 'services':
            return <Services />;
        case 'work':
            return <Work />;
        case 'about':
            return <About />;
        case 'contact':
            return <Contact />;
        case 'approach':
            return <ApproachPage />;
        case 'businesses':
            return <AudiencePage />;
        case 'agencies':
            return <AudiencePage agency />;
        case 'service-detail':
            return <ServiceDetail slug={slug} />;
        default:
            return <ProjectDetail slug={slug} />;
    }
}
