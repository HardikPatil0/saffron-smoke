import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Clock, Sparkles } from "lucide-react";
import { sanityClient } from "../lib/sanity";
import useSiteSettings from "../hooks/useSiteSettings";

export default function Home() {
  const settings = useSiteSettings();
  const [home, setHome] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "homePage"][0]{
          heroTopBadge,
          heroTitle,
          heroSubtitle,
          primaryButtonText,
          secondaryButtonText,
          specialsTitle,
          specials,
          promoTitle,
          promoSubtitle,
          highlightsTitle,
          highlightsSubtitle,
          highlights,
          ctaTitle,
          ctaSubtitle,
          ctaButtonText
        }`
      )
      .then((data) => setHome(data))
      .catch((err) => console.log("Home Fetch Error:", err));
  }, []);

  const highlights =
    home?.highlights?.length > 0
      ? home.highlights
      : [
          {
            title: "Chef’s Signature Platters",
            desc: "Smoky kebabs, creamy curries, and fusion starters curated for a premium experience.",
          },
          {
            title: "Luxury Ambience",
            desc: "Warm lights, soft music, and a modern interior that feels like a celebration every night.",
          },
          {
            title: "Handcrafted Mocktails",
            desc: "Fresh ingredients, bold flavors, and picture-perfect drinks made to impress.",
          },
        ];

  const specials =
    home?.specials?.length > 0
      ? home.specials
      : [
          { name: "Saffron Butter Chicken", tag: "Best Seller" },
          { name: "Smoked Paneer Tikka", tag: "Chef Pick" },
          { name: "Mutton Seekh Kebab", tag: "Spicy" },
          { name: "Tandoori Prawns", tag: "Premium" },
        ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400/30 to-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-48 right-0 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-rose-400/20 to-purple-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-2 text-xs text-zinc-600">
              <Sparkles size={14} className="text-orange-600" />
              {home?.heroTopBadge || "Premium Dining • Live Grill • Family Friendly"}
            </div>

            <h1 className="lux-heading mt-6 text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl">
              {home?.heroTitle || (
                <>
                  Where <span className="text-orange-600">Saffron</span> meets{" "}
                  <span className="text-amber-500">Smoke</span>.
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
              {home?.heroSubtitle || (
                <>
                  Welcome to{" "}
                  <span className="text-zinc-900 font-semibold">
                    {settings?.restaurantName || "Saffron & Smoke"}
                  </span>{" "}
                  — a modern restaurant experience crafted for food lovers who
                  enjoy rich flavors, premium presentation, and unforgettable
                  ambience.
                </>
              )}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-600 px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95"
              >
                {home?.primaryButtonText || "Book a Table"}
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition"
              >
                {home?.secondaryButtonText || "View Menu"}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <Star className="text-orange-600" size={18} />
                <span>
                  <span className="text-zinc-900 font-semibold">
                    {settings?.rating || "4.8"}
                  </span>{" "}
                  Ratings ({settings?.reviewCount || "2,400+"} Reviews)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="text-orange-600" size={18} />
                <span>{settings?.address || "Mumbai • City Square"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-orange-600" size={18} />
                <span>
                  {settings?.openingHours?.[0] || "Open till 12:30 AM"}
                </span>
              </div>
            </div>
          </div>

          {/* Specials Card */}
          <div className="relative">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-800">
                  {home?.specialsTitle || "Today’s Specials"}
                </p>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-700">
                  Limited
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {specials.map((dish) => (
                  <div
                    key={dish.name}
                    className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 hover:bg-zinc-50 transition"
                  >
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {dish.name}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {dish.tag || "Special"}
                      </p>
                    </div>

                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Chef Pick
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-500/15 p-4">
                <p className="text-sm font-semibold text-zinc-900">
                  {home?.promoTitle || "Flat 15% OFF on Family Combo"}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  {home?.promoSubtitle ||
                    "Available today 6PM – 9PM • Dine-in only"}
                </p>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-600 shadow-md md:block">
              “Most aesthetic restaurant in town.”
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="lux-heading text-2xl font-extrabold text-zinc-900 md:text-3xl">
              {home?.highlightsTitle || "Crafted for people who love premium taste"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600">
              {home?.highlightsSubtitle ||
                "Clean UI, premium feel, strong branding, and high conversion sections — perfect for restaurant clients."}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-zinc-900">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.desc}
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-600" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-amber-400/15 to-orange-500/10 p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="lux-heading text-2xl font-extrabold text-zinc-900 md:text-3xl">
                {home?.ctaTitle || "Ready to experience Saffron & Smoke?"}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {home?.ctaSubtitle ||
                  "Book your table now and enjoy a premium dining experience with family & friends."}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-600 px-6 py-3 text-sm font-semibold text-black hover:opacity-95 transition"
            >
              {home?.ctaButtonText || "Reserve Now"} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
