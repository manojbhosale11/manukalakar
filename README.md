# Manukalakar Frontend

A premium documentary photography portfolio built with **React 19 + Vite + Tailwind CSS**.

## Stack

- React 19
- Vite 6 (replaces CRA / CRACO)
- React Router 7
- Tailwind CSS 3
- Axios (contact form submission)
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

### Environment Variables

Copy `.env.example` → `.env` and update:

```env
VITE_BACKEND_URL=http://localhost:8001
# Optional alias (kept for backwards compatibility):
REACT_APP_BACKEND_URL=http://localhost:8001
```

## Build

```bash
npm run build     # output: build/
npm run preview   # serve the build locally
```

## Project Structure

```
src/
├── components/     # Layout, Navbar, Footer, MasonryGallery, Lightbox, VideoModal
├── pages/          # Home, Stories, StoryDetail, Weddings, WeddingDetail, Films, About, Contact
├── data/           # content.js — stories, weddings, films, brand info
├── App.js          # router
├── main.jsx        # entry
└── index.css       # global styles + Tailwind
```
