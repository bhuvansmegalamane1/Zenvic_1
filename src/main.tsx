import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App";

// Handle environment variables gracefully
let convex: ConvexReactClient;

if (import.meta.env.VITE_CONVEX_URL) {
  convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
} else {
  // Fallback for when VITE_CONVEX_URL is not set
  console.warn("VITE_CONVEX_URL not set. Some features may not work.");
  convex = new ConvexReactClient("http://localhost:3001"); // Placeholder
}

// Conditionally initialize PostHog analytics in production
if (import.meta.env.MODE === "production" && import.meta.env.VITE_POSTHOG_KEY) {
  import("posthog-js").then((posthog) => {
    posthog.default.init(import.meta.env.VITE_POSTHOG_KEY, {
      api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
      capture_pageview: false, // We'll manually capture pageviews
    });
  });
}

createRoot(document.getElementById("root")!).render(
  <ConvexAuthProvider client={convex}>
    <App />
  </ConvexAuthProvider>,
);