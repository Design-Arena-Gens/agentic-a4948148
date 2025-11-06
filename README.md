# Agentic Greeting

Autonomously generated Next.js project that greets visitors with a polished hero, live clock, and highlights panel.

## Getting Started

- Install dependencies: `npm install`
- Run locally: `npm run dev` then open `http://localhost:3000`
- Lint: `npm run lint`
- Build for production: `npm run build`

## Project Structure

```
app/              # App Router pages, layout, and sections
├─ globals.css    # Global styling
├─ layout.tsx     # Root layout with metadata + font
└─ page.tsx       # Home page composing sections
next.config.mjs   # Next.js configuration
tsconfig.json     # TypeScript configuration
```

## Deployment

This project targets Vercel out of the box. After building (`npm run build`), deploy with:

```
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-a4948148
```
