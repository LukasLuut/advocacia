/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { transform: "translateX(-30%) translateY(-50%)", opacity: "0.4" },
          "50%": { transform: "translateX(30%) translateY(-50%)", opacity: "0.6" },
        },
      },
      animation: {
        glow: "glow 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};