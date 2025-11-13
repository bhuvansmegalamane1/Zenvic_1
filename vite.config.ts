import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Base path for GitHub Pages deployment
  // Change this to your repository name if deploying to GitHub Pages
  // For example, if your repo is github.com/username/my-repo, set base to "/my-repo/"
  base: mode === "production" ? "/Zenvic_1/" : "/",
}));