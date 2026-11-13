import { build } from 'esbuild';
import { mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDirectory = resolve('out');
const cacheDirectory = resolve('.cache');

function escapeHtml(value) {
    return value.replace(
        /[&<>"']/g,
        (character) =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            })[character]
    );
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(join(outputDirectory, 'assets'), { recursive: true });
await mkdir(cacheDirectory, { recursive: true });
await cp('public', outputDirectory, { recursive: true });

try {
    const renderModule = join(cacheDirectory, 'render.mjs');

    await build({
        entryPoints: ['src/render.tsx'],
        outfile: renderModule,
        bundle: true,
        platform: 'node',
        format: 'esm',
        packages: 'external',
        jsx: 'automatic'
    });

    const { routes, renderPage } = await import(pathToFileURL(renderModule).href);
    const client = await build({
        entryPoints: ['src/main.tsx'],
        outdir: join(outputDirectory, 'assets'),
        entryNames: 'site-[hash]',
        bundle: true,
        minify: true,
        platform: 'browser',
        format: 'esm',
        jsx: 'automatic',
        metafile: true,
        legalComments: 'external',
        define: { 'process.env.NODE_ENV': '"production"' }
    });

    const javascriptFile = Object.keys(client.metafile.outputs).find((file) =>
        file.endsWith('.js')
    );
    const javascriptUrl = '/assets/' + javascriptFile.split('/').pop();
    const css = await readFile('src/styles/global.css', 'utf8');
    const cssFile = 'style.css';
    await writeFile(join(outputDirectory, 'assets', cssFile), css);

    for (const route of routes) {
        const directory = join(outputDirectory, route.path);
        const title = escapeHtml(`${route.title} | Freelance Pixels`);
        const markup = renderPage(route);

        await mkdir(directory, { recursive: true });
        await writeFile(
            join(directory, 'index.html'),
            `<!doctype html>
<html lang="en-GB">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${title}</title>
        <link rel="canonical" href="${escapeHtml('https://freelancepixels.uk' + route.path)}">
        <meta name="description" content="Independent web design and custom WordPress development in Essex. Bespoke components, my own boilerplate and hybrid editing built around your business.">
        <meta name="theme-color" content="#111214">
        <link rel="icon" href="/favicon.svg?v=2">
        <link rel="stylesheet" href="/assets/${cssFile}">
    </head>
    <body>
        <div id="site-root" data-page="${escapeHtml(route.page)}" data-slug="${escapeHtml(route.slug)}">${markup}</div>
        <script type="module" src="${javascriptUrl}"></script>
    </body>
</html>`
        );
    }

    const sitemapUrls = routes
        .map((route) => `    <url><loc>${escapeHtml('https://freelancepixels.uk' + route.path)}</loc></url>`)
        .join('\n');

    await writeFile(
        join(outputDirectory, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`
    );

    console.log(`Built ${routes.length} pages in out/.`);
} finally {
    await rm(cacheDirectory, { recursive: true, force: true });
}
