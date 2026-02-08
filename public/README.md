# Public Assets

This directory contains static assets that are served directly by Next.js.

Files in this directory are served from the root path `/`.

For example:
- `public/favicon.ico` is served as `/favicon.ico`
- `public/logo.png` is served as `/logo.png`

## Recommended Assets

- `favicon.ico` - Browser favicon
- `robots.txt` - Search engine crawling rules
- `sitemap.xml` - Site structure for search engines
- Images, fonts, and other static files

## Usage in Code

Reference files from the public directory using the root path:

```jsx
<Image src="/logo.png" alt="Logo" width={200} height={100} />
```

```html
<link rel="icon" href="/favicon.ico" />
```

Learn more: [Next.js Static File Serving](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)
