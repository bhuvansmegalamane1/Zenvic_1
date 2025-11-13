import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";
import { isAdmin } from "./auth";

export const submitConsultation = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    eventDate: v.string(),
    city: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const consultationId = await ctx.db.insert("consultations", {
      ...args,
      status: "pending",
    });
    return consultationId;
  },
});

export const getConsultations = query({
  args: {},
  handler: async (ctx) => {
    // Check if user is admin
    const userIsAdmin = await isAdmin(ctx);
    if (!userIsAdmin) {
      throw new Error("Unauthorized: User must be an admin to view consultations");
    }
    
    // Return consultations for admin users
    return await ctx.db.query("consultations").order("desc").collect();
  },
});