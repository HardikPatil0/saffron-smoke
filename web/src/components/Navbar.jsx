import { Link, NavLink } from "react-router-dom";
import { PhoneCall, CalendarDays } from "lucide-react";
import useSiteSettings from "../hooks/useSiteSettings";

export default function Navbar() {
  const settings = useSiteSettings();

  const nav = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
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

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${settings?.phone || "+919999999999"}`}
            className="hidden items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition sm:inline-flex"
          >
            <PhoneCall size={16} />
            Call
          </a>

          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 px-4 py-2 text-sm font-semibold text-black shadow-md hover:opacity-95 transition">
            <CalendarDays size={16} />
            Book Table
          </button>
        </div>
      </div>
    </header>
  );
}
