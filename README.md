# Minimal Static Tech Blog

A production-ready, minimalist technical blog built with Next.js (App Router) focusing on software architecture and backend engineering. This project is strictly static (SSG), requiring no runtime server login or databases.

## 🏗 Architecture Decisions

### 1. Fully Static (SSG)

The project uses `output: 'export'` in `next.config.mjs`. This converts the entire application into static HTML/CSS/JS files.

- **Why?** Reliability, speed, and cost-effectiveness. A static site can be hosted on any CDN (Vercel, GitHub Pages, S3) with zero operational overhead.

### 2. Local Markdown Content

Posts are stored as `.md` files in the `/content` folder.

- **Why?** Version control acts as the CMS. This avoids the complexity of external databases or headless CMS providers, keeping the engineering workflow simple.

### 3. Unified Markdown Pipeline

Uses `unified`, `remark`, and `rehype` for markdown processing.

- **Why?** It's modular and standard. `rehype-pretty-code` (via Shiki) provides build-time syntax highlighting, meaning no heavy highlighting JS is shipped to the user's browser.

### 4. Zero-Runtime Componentry

No complex UI libraries (Radix, Framer Motion) or authentication providers.

- **Why?** Reflects senior-level maturity. Intentionality over over-engineering. Performance is optimized by shipping as little JS as possible.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to see your blog.

### Adding New Posts

Simply create a new `.md` file in the `/content` directory with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "Brief summary of the post"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 📦 Deployment (Vercel)

Since this is a static site (`output: 'export'`), deployment is straightforward on Vercel:

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js.
4. The build command will be `next build`.
5. The output directory should be `out`.

**Important Note:** Because we use `output: 'export'`, Vercel's standard Image Optimization will not work unless you use a custom loader. This project is configured with `images: { unoptimized: true }` to maintain absolute portability and zero external dependencies.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS 4
- **Markdown:** unified, gray-matter, remark-parse
- **Syntax Highlighting:** rehype-pretty-code, shiki
- **SEO:** Next.js Metadata API, automated sitemap, robots.txt, and RSS (feed.xml)
