export const galleryItem = {
  name: "galleryItem",
  title: "Gallery Items",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Food", value: "food" },
          { title: "Ambience", value: "ambience" },
          { title: "Events", value: "events" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured (show at top)",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Order (sorting)",
      type: "number",
      initialValue: 1,
    },
  ],
};
