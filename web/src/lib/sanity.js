import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "nh2e63c8",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
