import { useEffect, useMemo, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import { Sparkles } from "lucide-react";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "galleryItem"] | order(featured desc, order asc){
          _id,
          title,
          category,
          featured,
          image
        }`
      )
      .then((data) => setItems(data))
      .catch((err) => console.log("Gallery Fetch Error:", err));
  }, []);

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((x) => x.category === active);
  }, [items, active]);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Food", value: "food" },
    { label: "Ambience", value: "ambience" },
    { label: "Events", value: "events" },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400/25 to-orange-500/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
            <Sparkles size={14} className="text-orange-600" />
            Food • Ambience • Celebrations
          </div>

          <h1 className="lux-heading mt-5 text-4xl font-bold text-zinc-900 md:text-5xl">
            Gallery
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            A glimpse into our premium dining experience — handcrafted dishes,
            warm ambience, and beautiful moments.
          </p>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setActive(t.value)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  active === t.value
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 text-center">
            <p className="lux-heading text-2xl font-bold text-zinc-900">
              No images found
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Add gallery items from Sanity Studio to display them here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={urlFor(item.image).width(900).height(650).url()}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {item.featured && (
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm">
                      Featured
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
                    {item.category.toUpperCase()}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm font-bold text-zinc-900">{item.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Tap to explore more
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
