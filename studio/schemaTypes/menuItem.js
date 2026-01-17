export const menuItem = {
  name: "menuItem",
  title: "Menu Items",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Dish Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "badge",
      title: "Badge (Chef Special / Trending / Premium Pick)",
      type: "string",
    },
    {
      name: "image",
      title: "Dish Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "showInChefRecommendations",
      title: "Show in Chef’s Recommendations?",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Starters", value: "starters" },
          { title: "Main Course", value: "mainCourse" },
          { title: "Desserts", value: "desserts" },
          { title: "Mocktails", value: "mocktails" },
        ],
      },
    },
  ],
};
