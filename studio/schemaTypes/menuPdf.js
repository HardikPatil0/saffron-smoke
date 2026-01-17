export const menuPdf = {
  name: "menuPdf",
  title: "Menu PDFs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Button Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tag",
      title: "Small Tag (Party / Couple / Family)",
      type: "string",
    },
    {
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: { accept: "application/pdf" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order (sorting)",
      type: "number",
      initialValue: 1,
    },
  ],
};
