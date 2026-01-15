import useSiteSettings from "../hooks/useSiteSettings";
import { PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const settings = useSiteSettings();

  const phone = settings?.phone || "+91 99999 99999";
  const email = settings?.email || "saffronsmoke.demo@gmail.com";
  const address = settings?.address || "Near City Square, Mumbai, India";

  // WhatsApp number should be like 919999999999 (no +)
  const whatsapp = settings?.whatsapp || "919999999999";

  const whatsappMessage = encodeURIComponent(
    "Hello! I want to book a table / ask about menu and timings."
  );

  const whatsappLink = `https://wa.me/${whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-semibold tracking-wider text-orange-700">
            CONTACT
          </p>

          <h1 className="lux-heading mt-3 text-4xl font-extrabold text-zinc-900 md:text-5xl">
            Visit us or contact us instantly
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
            For table bookings, private dining, events, or general inquiries —
            reach out via WhatsApp, call, or email.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-14 pb-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* LEFT - CONTACT CARDS */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <h2 className="lux-heading text-2xl font-bold text-zinc-900">
                Contact Details
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Quick ways to reach the restaurant.
              </p>

              <div className="mt-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <MapPin className="mt-0.5 text-orange-600" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      Address
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">{address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <PhoneCall className="mt-0.5 text-orange-600" size={18} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-900">Call</p>
                    <p className="mt-1 text-sm text-zinc-600">{phone}</p>

                    <a
                      href={`tel:${phone}`}
                      className="mt-3 inline-flex w-fit rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-800 transition"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <MessageCircle className="mt-0.5 text-orange-600" size={18} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-900">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Fastest way to book a table
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-fit rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <Mail className="mt-0.5 text-orange-600" size={18} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-900">Email</p>
                    <p className="mt-1 text-sm text-zinc-600">{email}</p>

                    <a
                      href={`mailto:${email}`}
                      className="mt-3 inline-flex w-fit rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BOOKING NOTE */}
            <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-amber-400/15 to-orange-500/10 p-7">
              <h3 className="lux-heading text-xl font-bold text-zinc-900">
                Private Dining & Events
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Planning a birthday, anniversary, family dinner, or corporate
                event? Contact us on WhatsApp for special menu packages and
                priority booking.
              </p>
            </div>
          </div>

          {/* RIGHT - MAP */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-3xl border border-zinc-200">
              {settings?.googleMapEmbedUrl ? (
                <iframe
                  src={settings.googleMapEmbedUrl}
                  width="100%"
                  height="520"
                  loading="lazy"
                  className="block w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              ) : (
                <div className="grid h-[520px] place-items-center bg-zinc-50 text-center">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      Map not added yet
                    </p>
                    <p className="mt-2 text-sm text-zinc-600">
                      Add Google Map Embed URL in Sanity → Site Settings.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm text-zinc-600">
              Tip: Search the restaurant on Google Maps and follow directions
              for easiest access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
