# Yarima Portfolio — React Version

## Setup

1. Copy your `nav-logo.png` into the `public/` folder (it's not included here — grab it from your old project).
2. Install dependencies:
   ```
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Structure

- `src/components/` — Nav, Hero, Technologies, About, Experience, Skills, Projects, Connect, Footer
- `src/pages/Home.jsx` — assembles all sections on the main page
- `src/pages/TrackerWriteup.jsx` — the new write-up page for the Livestock GPS Tracker project, at `/tracker`
- `src/index.css` — all your existing styles, unchanged, plus new `.article-page` styles for the write-up page

## What's new vs. the HTML version

- Routing via `react-router-dom` — the tracker project now links to `/tracker`, a full write-up page
- Everything else (design, sections, mobile responsiveness, hover effects) is preserved as-is
- Deploy to Vercel the same way — just point it at this repo instead; Vercel auto-detects Vite

## Next: "Why Hire Me" and persona landing page

Not built yet — say the word and we'll add:
- A "Why Hire Me" button/section
- The "which version of me do you want to meet" landing page with routes per persona (data / frontend / ML / infrastructure)
