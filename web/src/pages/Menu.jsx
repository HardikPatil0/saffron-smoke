import { useEffect, useState } from "react";
import { Star, Crown, TrendingUp, Sparkles } from "lucide-react";
import { sanityClient, urlFor } from "../lib/sanity";

export default function Menu() {
  const [menuPdfs, setMenuPdfs] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch PDFs
    sanityClient
      .fetch(
        `*[_type == "menuPdf"] | order(order asc){
          _id,
          title,
          tag,
          "pdfUrl": pdfFile.asset->url
        }`
      )
      .then((data) => setMenuPdfs(data))
      .catch((err) => console.log("PDF Fetch Error:", err));

    // Fetch Chef Recommendations
    sanityClient
      .fetch(
        `*[_type == "menuItem" && showInChefRecommendations == true] | order(rating desc){
          _id,
          name,
          description,
          rating,
          badge,
          image
        }`
      )
      .then((data) => setDishes(data))
      .catch((err) => console.log("Menu Items Fetch Error:", err));
  }, []);

  const signatureFood = [
    {
      name: "Saffron Butter Chicken",
      desc: "Our signature dish with saffron richness and premium plating.",
      icon: <Crown size={18} className="text-orange-600" />,
    },
    {
      name: "Tandoori Prawns",
      desc: "Charred perfection with smoky masala and citrus finish.",
      icon: <Crown size={18} className="text-orange-600" />,
    },
    {
      name: "Smoked Paneer Tikka",
      desc: "Aromatic grill flavors with chef’s spice blend.",
      icon: <Crown size={18} className="text-orange-600" />,
    },
  ];

  const famousFood = [
    {
      name: "Mutton Seekh Kebab",
      desc: "Customer favorite with bold spices and juicy texture.",
      icon: <TrendingUp size={18} className="text-orange-600" />,
    },
    {
      name: "Dal Makhani Royale",
      desc: "Loved for its slow-cooked richness and creamy finish.",
      icon: <TrendingUp size={18} className="text-orange-600" />,
    },
    {
      name: "Gulab Jamun Cheesecake",
      desc: "Most ordered dessert for celebrations and family dinners.",
      icon: <TrendingUp size={18} className="text-orange-600" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400/30 to-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-rose-400/20 to-purple-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
            <Sparkles size={14} className="text-orange-600" />
            Premium Menu • Event Menus • Signature Picks
          </div>

          <h1 className="lux-heading mt-5 text-4xl font-bold text-zinc-900 md:text-5xl">
            Menu crafted for celebrations & cravings
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Explore our signature dishes, crowd favorites, and downloadable menu
            PDFs for birthdays, anniversaries, kids meals, lunch, dinner, and
            party events.
          </p>
        </div>
      </section>

      {/* PDF MENU BUTTONS */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="lux-heading text-2xl font-bold text-zinc-900 md:text-3xl">
              Event Menus
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Quick access menus for celebrations and family visits.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {menuPdfs.map((m) => (
            <a
              key={m._id}
              href={m.pdfUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-orange-300 hover:bg-orange-50"
            >
              <span className="text-orange-700">{m.tag || "Menu"}</span>
              <span className="text-zinc-400">•</span>
              <span>{m.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CHEF'S RECOMMENDATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="lux-heading text-2xl font-bold text-zinc-900 md:text-3xl">
              Chef’s Recommendations
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Premium presentation, bold flavors, and customer-loved picks.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <div
              key={dish._id}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={
                    dish.image
                      ? urlFor(dish.image).width(800).height(500).url()
                      : "https://via.placeholder.com/800x500?text=Dish+Image"
                  }
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
                  {dish.badge || "Chef Pick"}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-zinc-900">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {dish.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-zinc-600">
                  <span className="inline-flex items-center gap-1 font-semibold text-zinc-800">
                    <Star size={16} className="text-orange-600" />
                    {dish.rating || "4.5"}
                  </span>

                  <span className="text-xs font-semibold text-orange-700">
                    Dine-in Favorite
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE VS FAMOUS */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Signature */}
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-amber-400/15 to-orange-500/10 p-7">
            <div className="flex items-center gap-2">
              <Crown className="text-orange-600" size={20} />
              <h3 className="lux-heading text-2xl font-bold text-zinc-900">
                Signature Food
              </h3>
            </div>

            <p className="mt-2 text-sm text-zinc-600">
              Chef-crafted dishes that define the identity of Saffron & Smoke.
            </p>

            <div className="mt-6 space-y-4">
              {signatureFood.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Famous */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-orange-600" size={20} />
              <h3 className="lux-heading text-2xl font-bold text-zinc-900">
                Famous Food
              </h3>
            </div>

            <p className="mt-2 text-sm text-zinc-600">
              Crowd favorites with high repeat orders and great reviews.
            </p>

            <div className="mt-6 space-y-4">
              {famousFood.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
