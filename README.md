# Enoch Olayemi Portfolio Website

A clean, responsive static portfolio for a full-stack developer and web designer.

## What it includes

- Home/about section
- Resume download button
- 5 project cards
- Featured case study for Tapitude Creator Hub
- GitHub, LinkedIn, and email contact links
- Responsive design for mobile, tablet, and desktop
- Advanced CSS structure using cascade layers
- Design tokens for color, spacing, typography, radius, and shadows
- Container queries, `clamp()`, modern selectors, and accessibility-focused states
- PostCSS and Lightning CSS CLI build scripts for bundled/minified CSS

## Quick start

Open `index.html` directly in your browser.

The page already links to `dist/styles.min.css`, so it works without installing anything.

## Replace these before submitting

1. Add your real resume PDF here:

```txt
assets/resume/Enoch-Olayemi-Resume.pdf
```

2. Update the LinkedIn link in `index.html`:

```html
https://www.linkedin.com/in/your-linkedin-here
```

3. Update project links once your GitHub repositories or live demos are ready.

## CSS build workflow

Install dependencies:

```bash
npm install
```

Build readable bundled CSS:

```bash
npm run build:css
```

Build minified CSS with PostCSS/cssnano:

```bash
npm run build:css:min
```

Build minified CSS with Lightning CSS:

```bash
npm run build:css:lightning
```

Run the local dev server:

```bash
npm run dev
```

## Folder structure

```txt
.
├── index.html
├── package.json
├── postcss.config.cjs
├── dist/
│   ├── styles.css
│   └── styles.min.css
├── src/
│   └── styles/
│       ├── main.css
│       ├── settings/
│       ├── generic/
│       ├── elements/
│       ├── layouts/
│       ├── components/
│       └── utilities/
├── scripts/
│   └── main.js
└── assets/
    ├── images/
    └── resume/
```

## Notes

This version uses your current positioning as a full-stack developer and web designer. It also highlights the Tapitude Creator Hub as the strongest case study because it shows backend, dashboard, content management, and user-facing web design.
