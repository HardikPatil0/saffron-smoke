# Saffron & Smoke — Restaurant Demo Website

A premium, client-ready restaurant website demo built for freelancing outreach.

This project includes:
- Modern responsive UI (light theme)
- Fully editable content using Sanity CMS
- Multi-page routing using React Router DOM

---

## 🚀 Live Demo
- https://saffron-smoke.vercel.app/

---

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
- Frontend: React (Vite), Tailwind CSS, React Router DOM, Lucide Icons
- CMS: Sanity Studio + Sanity Content Lake
- Deployment: Vercel (frontend), Sanity hosting (studio)

---

## 📁 Project Structure

```bash
saffron-smoke/
├── web/                 # Frontend (Vite + React)
└── studio/              # Sanity Studio (CMS)


⚙️ Installation & Setup (Run Locally)
1) Clone the repository
git clone https://github.com/HardikPatil0/saffron-smoke.git
cd saffron-smoke

2) Run the frontend (web)
cd web
npm install
npm install react-router-dom
npm run dev


Frontend runs at:

http://localhost:5173

Note: If react-router-dom is already in package.json, you can skip:
npm install react-router-dom

3) Run the Sanity Studio (studio)

Open a new terminal:

cd studio
npm install
npm install -g @sanity/cli
sanity start


Sanity Studio runs at:

http://localhost:3333

🔐 Environment Variables (Sanity)

Create a .env file inside the web/ folder:

VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01


Restart the frontend:

npm run dev
