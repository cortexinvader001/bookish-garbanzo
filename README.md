# Portfolio Developer Guide

A modern, high-performance portfolio template built with **React**, **Vite**, **Tailwind CSS**, and interactive **WebGL** shaders.

---

## 🚀 Deployment & URLs

When deploying your portfolio (e.g. to Cloud Run, Vercel, Render, Netlify, or GitHub Pages), update the corresponding URL references in your project.

### Deployment Reference Points:
- **Live Preview / Production URL**: Update in `index.html` (Open Graph & Schema.org) and `public/robots.txt` + `public/sitemap.xml`.
- **Project Live & Code URLs**: Configured per project inside `src/config.json`.

---

## ⚙️ Configuration Guide (`src/config.json`)

All site content, projects, contact channels, and bio notes are driven entirely by `src/config.json`. You do not need to modify core React components to update content.

### 1. Profile Information (`profile`)
Set your name, tagline, professional role, and contact email:
```json
{
  "profile": {
    "name": "Your Name",
    "tagline": "Your personal tagline or slogan.",
    "role": "Your Professional Title",
    "email": "your.email@example.com",
    "location": "Your Location / Remote",
    "bio": "A brief overview of your background and domain expertise."
  }
}
```

---

### 2. About Me & Notes (`about`)
Configure the bio section and architectural/philosophical tenets displayed on `#aboutme`:
```json
{
  "about": {
    "id": "aboutme",
    "title": "About Me",
    "subtitle": "Brief subtitle highlighting your engineering focus.",
    "bio": "Detailed summary of your technical background and philosophy.",
    "notes": [
      {
        "title": "Topic or Tenet Title",
        "description": "Explanation of your philosophy, domains, or experiments."
      }
    ]
  }
}
```
*Note: Note items do not require an `id` attribute; they only require `title` and `description`.*

---

### 3. Contact & Social Channels (`contacts`)
Add or modify social media handles, portfolio links, and messaging options:
```json
{
  "contacts": [
    {
      "platform": "GitHub",
      "handle": "@username",
      "url": "https://github.com/username",
      "icon": "github",
      "color": "#a371f7",
      "accent": "#c084fc",
      "description": "Short description of what visitors will find here."
    },
    {
      "platform": "LinkedIn",
      "handle": "@username",
      "url": "https://linkedin.com/in/username",
      "icon": "linkedin",
      "color": "#0a66c2",
      "accent": "#38bdf8",
      "description": "Professional network and experience."
    },
    {
      "platform": "Instagram",
      "handle": "@username",
      "url": "https://instagram.com/username",
      "icon": "instagram",
      "color": "#e1306c",
      "accent": "#f43f5e",
      "description": "Visual highlights and design snippets."
    },
    {
      "platform": "Threads",
      "handle": "@username",
      "url": "https://threads.net/@username",
      "icon": "threads",
      "color": "#ffffff",
      "accent": "#e2e8f0",
      "description": "Developer thoughts and updates."
    },
    {
      "platform": "Email",
      "handle": "your.email@example.com",
      "url": "mailto:your.email@example.com",
      "icon": "mail",
      "color": "#4285f4",
      "accent": "#60a5fa",
      "description": "Direct inquiries and proposals."
    }
  ]
}
```
*Supported `icon` keys: `github`, `linkedin`, `instagram`, `threads`, `mail`.*

---

### 4. Projects Collection (`projects`)
Add projects to populate both the moving-border cards on `/projects` and the dynamic detail pages at `/projects/:slug`:
```json
{
  "projects": [
    {
      "slug": "unique-url-slug",
      "title": "Project Title",
      "tagline": "One-line summary for project cards.",
      "description": "Comprehensive explanation of architecture, challenges, and solutions.",
      "image": "https://example.com/screenshot.png",
      "tags": ["React", "WebGL", "Python", "Cloud"],
      "links": {
        "live": "https://your-deployed-app.com",
        "code": "https://github.com/username/project-repo"
      }
    }
  ]
}
```

---

## 🔍 SEO, Robots.txt & Sitemap Configuration

### Robots (`public/robots.txt`)
Controls search engine indexing and declares sitemap location:
```txt
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

### Sitemap (`public/sitemap.xml`)
List all public routes with priority and change frequencies. When adding new projects or routes, append a `<url>` block to `public/sitemap.xml`:
```xml
<url>
  <loc>https://your-domain.com/projects/your-new-project-slug</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Metadata & Canonical Tags (`index.html`)
Update the following tags when linking a custom domain:
- `<title>` and `<meta name="title">`
- `<meta name="description">`
- `<meta property="og:url" content="https://your-domain.com">`
- `<script type="application/ld+json">` (replace `"url"` with your production domain)

---

## 💻 Commands

```bash
# Install dependencies
npm install

# Start local development server (Port 3000)
npm run dev

# Build production bundle (Output in dist/)
npm run build
```
