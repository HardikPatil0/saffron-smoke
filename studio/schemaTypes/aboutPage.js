export const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 3,
    },
    {
      name: "story",
      title: "Our Story",
      type: "text",
      rows: 6,
    },
    {
      name: "chefName",
      title: "Chef Name",
      type: "string",
    },
    {
      name: "chefMessage",
      title: "Chef Message",
      type: "text",
      rows: 4,
    },
    {
      name: "chefImage",
      title: "Chef Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "highlights",
      title: "Highlights",
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
      name: "stats",
      title: "Stats (Numbers)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    },
  ],
};
