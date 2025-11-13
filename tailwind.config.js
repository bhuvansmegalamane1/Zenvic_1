/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FEFDF8',
        'cream': '#F8F6F0',
        'warm-beige': '#E8E2D5',
        'muted-green': '#8B9A8C',
        'charcoal': '#2C2C2C',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
        'arimo': ['Arimo', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
        'muli': ['Muli', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      borderRadius: {
        'lg': '8px',
      },
    },
  },
  plugins: [],
}