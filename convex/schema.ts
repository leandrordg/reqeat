import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    title: v.string(),
    excerpt: v.string(),
    description: v.string(),
    price: v.number(),
    banner: v.optional(v.string()),
    image: v.string(),
  }).searchIndex("search_title", {
    searchField: "title",
  }),
  categories: defineTable({
    title: v.string(),
  }),
});
