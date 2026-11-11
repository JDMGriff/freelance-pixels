# Freelance Pixels

React and TypeScript with Vite for local development. The production build renders every route to HTML and hydrates it with React.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Production output: `out/`.

- `src/pages/`: page components
- `src/components/`: shared components
- `src/routes.ts`: route definitions shared by development and the static build
- `src/styles/global.css`: site styles
- `src/data/services.ts`: service content
- `content/projects.json`: project content, credits and image paths
- `public/`: images, fonts and favicon
- `scripts/build.mjs`: static rendering and production asset build

Project cards and case study routes are generated from `content/projects.json`. Its first two entries appear on the homepage.

The contact helper prepares a `mailto:` enquiry. There is no CMS or server-side form handler.
