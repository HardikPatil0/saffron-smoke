import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";

export default function useSiteSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
     `*[_type == "siteSettings"][0]{
  restaurantName,
  tagline,
  phone,
  whatsapp,
  email,
  address,
  googleMapEmbedUrl,
  openingHours,
  rating,
  reviewCount,
  footerNote,
  socialLinks
}`
      )
      .then((data) => setSettings(data))
      .catch((err) => console.log("SiteSettings Fetch Error:", err));
  }, []);

  return settings;
}
