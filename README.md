# Kolawole Suleiman — Portfolio

React + Vite version of the portfolio site, with routing via React Router.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx              Router setup — add new pages/routes here
  App.jsx                Shared layout: background, ripple canvas, header, <Outlet/>
  index.css               All global styles
  components/
    Header.jsx             Logo + nav (active link highlighting via NavLink)
    RippleBackground.jsx    WebGL cursor-ripple effect (ogl), respects prefers-reduced-motion
    ScrollCue.jsx           Bottom scroll indicator, shown on Home
  pages/
    Home.jsx                Hero section
    Projects.jsx             Grid of project cards, pulled from src/data/projects.js
    ProjectDetail.jsx        /projects/:slug — detail page for one project
    Contact.jsx               Contact links
  data/
    projects.js               Add/edit projects here — each entry auto-generates
                               a card on /projects and a page at /projects/:slug
```

## Adding a new project

Open `src/data/projects.js` and add an object to the array:

```js
{
  slug: 'my-new-project',
  title: 'My New Project',
  tagline: 'One-line description for the card.',
  image: 'https://...',
  tech: ['React', 'Node'],
  description: 'Longer description shown on the detail page.',
  links: { live: 'https://...', code: 'https://github.com/...' },
}
```

That's it — it'll appear on the Projects page and get its own detail route automatically.

## Adding a new page

1. Create `src/pages/YourPage.jsx`.
2. Register it in `src/main.jsx` inside the `<Route path="/" element={<App />}>` block.
3. Add a nav link in `src/components/Header.jsx` if it should appear in the header.

## Notes

- The ripple background effect is skipped automatically for users with
  `prefers-reduced-motion` enabled.
- Deploy the `dist/` folder (after `npm run build`) to any static host —
  Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc. If deploying to a
  subpath or GitHub Pages project site, you may need to set `base` in
  `vite.config.js`.
