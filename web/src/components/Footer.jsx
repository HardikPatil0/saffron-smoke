import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import useSiteSettings from "../hooks/useSiteSettings";

export default function Footer() {
  const settings = useSiteSettings();

  const quickLinks = [
    "Menu",
    "Reservations",
    "Private Dining",
    "Gallery",
    "Events",
    "Contact",
  ];

  const topDishes = [
    "Saffron Butter Chicken",
    "Smoked Paneer Tikka",
    "Tandoori Prawns",
    "Mutton Seekh Kebab",
    "Gulab Jamun Cheesecake",
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white">
      {/* Premium CTA Strip */}
      <div className="mx-auto max-w-7xl px-4 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-amber-400/20 to-orange-500/10 p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h3 className="lux-heading text-2xl font-bold text-zinc-900">
                Reserve your table for a premium dining experience.
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {settings?.footerNote ||
                  "Fresh ingredients, live grill, and luxury ambience — perfect for families, couples, and celebrations."}
              </p>
            </div>

          <Link
  to="/contact"
  className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-zinc-800 transition"
>
  Book Now
</Link>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-md">
                <span className="text-sm font-black text-white">S&S</span>
              </div>
              <div>
                <p className="lux-heading text-lg font-bold text-zinc-900">
                  {settings?.restaurantName || "Saffron & Smoke"}
                </p>
                <p className="text-xs font-medium text-zinc-500">
                  {settings?.tagline || "Modern Grill • Fine Dine"}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              A premium restaurant experience crafted for people who love bold
              flavors, beautiful plating, and unforgettable ambience.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={settings?.socialLinks?.instagram || "#"}
                className="rounded-xl border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href={settings?.socialLinks?.facebook || "#"}
                className="rounded-xl border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href={settings?.socialLinks?.youtube || "#"}
                className="rounded-xl border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-zinc-900 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Dishes */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Top Dishes</h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              {topDishes.map((item) => (
                <li key={item} className="flex items-center justify-between">
                  <span className="hover:text-zinc-900 transition">{item}</span>
                  <span className="text-xs text-orange-600 font-semibold">
                    Popular
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Timings */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">
              Contact & Timings
            </h4>

            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-orange-600" />
                {settings?.address || "Near City Square, Mumbai, India"}
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} className="text-orange-600" />
                {settings?.phone || "+91 99999 99999"}
              </p>

              <p className="flex items-center gap-2">
                <Mail size={16} className="text-orange-600" />
                {settings?.email || "saffronsmoke.demo@gmail.com"}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold text-zinc-900">
                Opening Hours
              </p>

              <ul className="mt-2 space-y-1 text-xs text-zinc-600">
                {(settings?.openingHours || []).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}

                {!settings?.openingHours?.length && (
                  <>
                    <li>Mon - Fri: 12:00 PM – 11:30 PM</li>
                    <li>Sat - Sun: 12:00 PM – 12:30 AM</li>
                    <li>Happy Hours: 5:00 PM – 7:00 PM</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {settings?.restaurantName || "Saffron & Smoke"}. All rights reserved.
          </p>
          <p>Demo website by Hardik Patil (Freelancer)</p>
        </div>
      </div>
    </footer>
  );
}
