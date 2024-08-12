/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        nautigal: ["The Nautigal", "cursive"],
        roboto: ["Roboto", "sans-serif"]
      },
      backgroundImage: {
        "bgImg": `url("/assets/homepage.webp")`,
        "about": `url("/assets/about.jpg")`,
        "hotel": `url("/assets/wael.jpg")`
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          'background-color': 'rgba(0, 0, 0, 0.6)',
        }
      })
    }
  ],
}

