import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./blog",
  }),
  
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // description: z.string(),
    location: z.string(),
    count: z.number(),
    shortid: z.string(),
    author: z.array(z.string()),
    // tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};