export const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroTopBadge",
      title: "Hero Top Badge (small line)",
      type: "string",
    },
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    },
    {
      name: "heroImage",
      title: "Hero Image (optional)",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    },
    {
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    },

    {
      name: "specialsTitle",
      title: "Specials Title",
      type: "string",
    },

    {
      name: "specials",
      title: "Today’s Specials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Dish Name", type: "string" },
            { name: "tag", title: "Tag (Chef Pick / New / Trending)", type: "string" },
          ],
        },
      ],
    },

    {
      name: "promoTitle",
      title: "Promo Title",
      type: "string",
    },
    {
      name: "promoSubtitle",
      title: "Promo Subtitle",
      type: "string",
    },

    {
      name: "highlightsTitle",
      title: "Highlights Title",
      type: "string",
    },
    {
      name: "highlightsSubtitle",
      title: "Highlights Subtitle",
      type: "string",
    },
    {
      name: "highlights",
      title: "Highlights Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    },

    {
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    },
    {
      name: "ctaSubtitle",
      title: "CTA Subtitle",
      type: "string",
    },
    {
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
    },
  ],
};
