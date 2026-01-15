# Saffron & Smoke — Restaurant Demo Website (React + Tailwind + Sanity)

A premium, client-ready restaurant website demo built for freelancing outreach.  
This project includes a modern UI, fully editable content using Sanity CMS, and a clean light-theme design.

## ✨ Features

### Frontend (Vite + React + Tailwind)
- Modern responsive UI (light theme)
- Premium Navbar + Footer
- Pages:
  - Home
  - Menu (Sanity controlled)
  - Gallery (Sanity controlled)
  - About (Sanity controlled)
  - Contact (Sanity controlled + WhatsApp + Google Map)
- Event Menu PDF buttons (download + open)
- Chef’s Recommendations (dynamic from Sanity)
- Gallery filters (All / Food / Ambience / Events)

### CMS (Sanity Studio)
Restaurant owner can edit everything anytime:
- Global settings (name, tagline, phone, email, address, timings, socials)
- Menu PDFs (Birthday / Anniversary / Lunch etc.)
- Menu items with images + rating + badges
- Gallery images + categories
- About page content (story, highlights, stats, chef message)
- Contact page data (WhatsApp + map embed URL)

---

## 🧱 Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, React Router DOM, Lucide Icons  
- **CMS:** Sanity Studio + Sanity Content Lake  
- **Deployment:** Vercel (frontend), Sanity hosting (studio)

---

## 📁 Folder Structure

saffron-smoke/
│
├── README.md
├── .gitignore
│
├── web/                        # Frontend (Vite + React + Tailwind)
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   │   └── menus/              # (Optional) PDFs if you keep local backup
│   │
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       │
│       ├── assets/
│       │   └── menu/           # Local images (optional backup)
│       │       ├── dish1.jpg
│       │       ├── dish2.jpg
│       │       └── ...
│       │
│       ├── lib/
│       │   └── sanity.js       # Sanity client + image url builder
│       │
│       ├── hooks/
│       │   └── useSiteSettings.js
│       │
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       │
│       └── pages/
│           ├── Home.jsx
│           ├── Menu.jsx
│           ├── Gallery.jsx
│           ├── About.jsx
│           └── Contact.jsx
│
└── studio/                     # Sanity CMS (Editable Content)
    ├── package.json
    ├── sanity.config.js
    ├── sanity.cli.js
    │
    └── schemaTypes/
        ├── index.js
        ├── siteSettings.js
        ├── menuPdf.js
        ├── menuItem.js
        ├── galleryItem.js
        └── aboutPage.js
