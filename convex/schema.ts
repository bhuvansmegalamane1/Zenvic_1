import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  consultations: defineTable({
    name: v.string(),
    email: v.string(),
    eventDate: v.string(),
    city: v.string(),
    message: v.string(),
    status: v.string(), // "pending", "contacted", "completed"
  }),
  testimonials: defineTable({
    clientName: v.string(),
    review: v.string(),
    rating: v.number(),
    eventType: v.string(),
  }),
  gallery: defineTable({
    title: v.string(),
    category: v.string(),
    imageUrl: v.string(),
    description: v.optional(v.string()),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
