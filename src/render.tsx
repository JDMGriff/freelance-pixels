import { renderToString } from 'react-dom/server';
import App from './App';
import type { Route } from './routes';

export { routes } from './routes';
export function renderPage(route: Route) {
    return renderToString(<App page={route.page} slug={route.slug} />);
}
