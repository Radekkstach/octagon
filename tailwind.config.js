/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Naše tmavé pozadí
        gym: {
          base: '#0f0f0f',    // Hlavní pozadí
          surface: '#1a1a1a', // Karty, sekce
          highlight: '#262626'
        },
        // Octagon Brand Red
        brand: {
          red: '#EF4444',     // Základní červená
          dark: '#DC2626',    // Hover stavy
        }
      },
      fontFamily: {
        // Importujeme v CSS (viz níže)
        heading: ['Oswald', 'sans-serif'], // Nadpisy
        body: ['Inter', 'sans-serif'],     // Text
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')", // Placeholder - tmavé fitko
      }
    },
  },
  plugins: [],
}