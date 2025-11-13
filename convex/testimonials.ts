import { query } from "./_generated/server";

export const getTestimonials = query({
  args: {},
  handler: async (ctx) => {
    // Return testimonials from the database
    return await ctx.db.query("testimonials").order("desc").collect();
  },
});