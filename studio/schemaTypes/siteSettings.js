export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings (Global)",
  type: "document",
  fields: [
    {
      name: "restaurantName",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "address", title: "Address", type: "string" },

    {
      name: "openingHours",
      title: "Opening Hours",
      type: "array",
      of: [{ type: "string" }],
    },

    { name: "rating", title: "Rating", type: "number" },
    { name: "reviewCount", title: "Review Count", type: "number" },

    { name: "footerNote", title: "Footer Note", type: "string" },

    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
      ],
    },
    {
  name: "whatsapp",
  title: "WhatsApp Number (with country code)",
  type: "string",
},
{
  name: "googleMapEmbedUrl",
  title: "Google Map Embed URL",
  type: "url",
},
  ],
};
