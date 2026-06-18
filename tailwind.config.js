/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        fruit: {
          orange: "#FF6B35",
          "orange-light": "#FF8F5E",
          "orange-dark": "#E55A25",
          green: "#2D5016",
          "green-light": "#4A7A2E",
          "green-pale": "#E8F5E9",
          cream: "#FFF8F0",
          "cream-dark": "#F5EDE3",
          bark: "#5C3D2E",
          gold: "#F5A623",
          red: "#E74C3C",
        },
      },
      fontFamily: {
        sans: ["Noto Sans SC", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
