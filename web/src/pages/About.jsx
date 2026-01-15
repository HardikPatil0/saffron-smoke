import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../lib/sanity";
import { Sparkles, Quote, ShieldCheck, Star } from "lucide-react";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutPage"][0]{
          headline,
          subheadline,
          story,
          chefName,
          chefMessage,
          chefImage,
          highlights,
          stats
        }`
      )
      .then((data) => setAbout(data))
      .catch((err) => console.log("About Fetch Error:", err));
  }, []);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400/25 to-orange-500/15 blur-3xl" />
          <div className="absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-zinc-200/40 to-orange-200/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
            <Sparkles size={14} className="text-orange-600" />
            Premium Dining • Crafted Taste • Luxury Ambience
          </div>

          <h1 className="lux-heading mt-6 text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl">
            {about?.headline || "A modern dining experience crafted with love"}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {about?.subheadline ||
              "We blend bold flavors, premium ingredients, and warm hospitality to create a dining experience people remember."}
          </p>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800">
              <ShieldCheck size={16} className="text-orange-600" />
              Hygienic Kitchen
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800">
              <Star size={16} className="text-orange-600" />
              Premium Experience
            </div>
          </div>
        </div>
      </section>

      {/* STATS (MORE PREMIUM) */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(about?.stats || []).map((s, i) => (
            <div
              key={i}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition"
            >
              <p className="lux-heading text-4xl font-extrabold text-zinc-900">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-600">
                {s.label}
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-600" />
            </div>
          ))}

          {!about?.stats?.length && (
            <>
              {[
                { value: "25K+", label: "Happy Customers" },
                { value: "60+", label: "Signature Dishes" },
                { value: "10+", label: "Years of Taste" },
                { value: "500+", label: "Events Hosted" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition"
                >
                  <p className="lux-heading text-4xl font-extrabold text-zinc-900">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-600">
                    {s.label}
                  </p>
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-600" />
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* STORY + CHEF (BIGGER IMAGE) */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Story */}
          <div>
            <p className="text-xs font-semibold tracking-wider text-orange-700">
              OUR STORY
            </p>
            <h2 className="lux-heading mt-3 text-3xl font-extrabold text-zinc-900 md:text-4xl">
              Crafted with passion, served with pride
            </h2>

            <p className="mt-5 text-base leading-relaxed text-zinc-600 whitespace-pre-line">
              {about?.story ||
                "Saffron & Smoke is built on a simple promise — premium ingredients, bold flavors, and warm hospitality.\n\nEvery dish is crafted with care and served with a luxury dining experience."}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                Fine Dine Experience
              </span>
              <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700">
                Perfect for Families
              </span>
              <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700">
                Events & Celebrations
              </span>
            </div>
          </div>

          {/* Chef Card */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
              <div className="h-[340px] w-full md:h-[420px]">
                {about?.chefImage ? (
                  <img
                    src={urlFor(about.chefImage).width(1200).height(900).url()}
                    alt={about?.chefName || "Chef"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-zinc-100" />
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6">
                <p className="text-sm font-semibold text-white/90">
                  Head Chef
                </p>
                <p className="lux-heading mt-1 text-2xl font-extrabold text-white">
                  {about?.chefName || "Chef Arjun Mehta"}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <Quote size={18} className="mt-1 text-orange-600" />
                <p className="text-sm leading-relaxed text-zinc-700">
                  {about?.chefMessage ||
                    "Every plate tells a story. We craft food that feels premium, comforting, and unforgettable."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS (MORE PROFESSIONAL) */}
      <section className="mx-auto max-w-7xl px-4 py-16 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-orange-700">
              WHY CHOOSE US
            </p>
            <h2 className="lux-heading mt-3 text-3xl font-extrabold text-zinc-900 md:text-4xl">
              Why people love dining with us
            </h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-600">
              Premium dining is not only taste — it’s the experience, the
              hospitality, and the vibe.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {(about?.highlights || []).map((h, i) => (
            <div
              key={i}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg font-bold text-zinc-900">{h.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {h.desc}
              </p>

              <div className="mt-5 h-[1px] w-full bg-zinc-200" />

              <p className="mt-4 text-xs font-semibold text-orange-700">
                Premium Standard
              </p>
            </div>
          ))}

          {!about?.highlights?.length && (
            <>
              {[
                {
                  title: "Premium Ingredients",
                  desc: "Fresh sourcing, rich flavors, and premium presentation.",
                },
                {
                  title: "Luxury Ambience",
                  desc: "Warm lights, comfortable seating, and elegant vibes.",
                },
                {
                  title: "Perfect for Celebrations",
                  desc: "Birthdays, anniversaries, family dinners, and events.",
                },
              ].map((h) => (
                <div
                  key={h.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-lg font-bold text-zinc-900">{h.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {h.desc}
                  </p>

                  <div className="mt-5 h-[1px] w-full bg-zinc-200" />

                  <p className="mt-4 text-xs font-semibold text-orange-700">
                    Premium Standard
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
