import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  PhoneCall,
  CalendarDays,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import useSiteSettings from "../hooks/useSiteSettings";

export default function Navbar() {
  const settings = useSiteSettings();
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-md">
            <span className="text-sm font-black text-white">S&S</span>
          </div>

          <div className="leading-tight">
            <p className="lux-heading text-[16px] font-bold tracking-wide text-zinc-900">
              {settings?.restaurantName || "Saffron & Smoke"}
            </p>
            <p className="text-[11px] font-medium text-zinc-500">
              {settings?.tagline || "Modern Grill • Fine Dine"}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white px-2 py-2 shadow-sm md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-zinc-900 text-white shadow"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${settings?.phone || "+919999999999"}`}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
          >
            <PhoneCall size={16} />
            Call
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 px-4 py-2 text-sm font-semibold text-black shadow-md hover:opacity-95 transition"
          >
            <CalendarDays size={16} />
            Book Table
          </Link>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Book button small */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 px-3 py-2 text-sm font-semibold text-black shadow-md hover:opacity-95 transition"
          >
            <CalendarDays size={16} />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-800 shadow-sm hover:bg-zinc-50 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-zinc-200 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4">
          {/* Links */}
          <div className="grid gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                  }`
                }
              >
                <span>{item.name}</span>
                <ArrowRight size={16} />
              </NavLink>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-4 grid gap-2">
            <a
              href={`tel:${settings?.phone || "+919999999999"}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition"
            >
              <PhoneCall size={16} />
              Call Now
            </a>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-600 px-4 py-3 text-sm font-semibold text-black shadow-md hover:opacity-95 transition"
            >
              <CalendarDays size={16} />
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
