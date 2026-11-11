import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { findRoute } from './routes';

const root = document.getElementById('site-root');
if (!root) {
    throw new Error('The application root is missing.');
}
const route = findRoute(window.location.pathname);
const app = <App page={route?.page ?? 'project-detail'} slug={route?.slug ?? ''} />;
if (root.hasChildNodes()) {
    hydrateRoot(root, app);
} else {
    createRoot(root).render(app);
}
if (route) {
    document.title = `${route.title} | Freelance Pixels`;
}
