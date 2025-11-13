# The Art of Beauty Premium Floral Décor Website

This is a premium floral décor website built with React, TypeScript, and Tailwind CSS. The website features a modern, elegant design with smooth animations and a responsive layout.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Modern UI with elegant color scheme
- Fully functional contact form
- Gallery with filterable portfolio items
- Testimonials section
- Services showcase
- SEO optimized

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Framer Motion for animations
- Convex for backend services
- Vite for build tooling
- PostHog for analytics (optional)

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file based on `.env.example`:
   ```
   VITE_CONVEX_URL=your_convex_url_here
   VITE_POSTHOG_KEY=your_posthog_key_here (optional)
   VITE_POSTHOG_HOST=your_posthog_host_here (optional)
   ```
4. Start the development server with `npm run dev:frontend` (to avoid Convex login prompts)

## Deployment

### Deploying to GitHub Pages (Automatic)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)
2. Add your environment variables as GitHub Secrets:
   - `VITE_CONVEX_URL` (from your Convex dashboard)
   - `VITE_POSTHOG_KEY` (optional, from your PostHog project)
   - `VITE_POSTHOG_HOST` (optional, defaults to PostHog cloud)

### Deploying to GitHub Pages (Manual)

1. Build the project: `npm run build`
2. The built files will be in the `dist` folder
3. Configure your GitHub repository settings to serve from the `dist` folder

### Deploying to Vercel/Netlify

1. Connect your GitHub repository to Vercel/Netlify
2. Set the build command to: `npm run build`
3. Set the publish directory to: `dist`
4. Add environment variables in your deployment platform:
   - `VITE_CONVEX_URL` (from your Convex dashboard)
   - `VITE_POSTHOG_KEY` (optional, from your PostHog project)
   - `VITE_POSTHOG_HOST` (optional, defaults to PostHog cloud)

### Environment Variables

For deployment, you must set the following environment variables:
- `VITE_CONVEX_URL`: Your Convex deployment URL
- `VITE_POSTHOG_KEY`: (Optional) Your PostHog project key
- `VITE_POSTHOG_HOST`: (Optional) Your PostHog host (defaults to https://us.i.posthog.com)

## Security Features

- Content Security Policy implemented
- Environment variables for sensitive data
- Secure form submissions
- Protected admin routes

## Performance Optimizations

- Lazy loading for routes
- Optimized images in public directory
- Minified CSS and JavaScript
- Efficient intersection observer for animations