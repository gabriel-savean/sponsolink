/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          from: { transform: "translateX(0) rotate(0)", opacity: "1" },
          to: { transform: "translateX(100%) rotate(10deg)", opacity: "0" },
        },
        slideLeft: {
          from: { transform: "translateX(0) rotate(0)", opacity: "1" },
          to: { transform: "translateX(-100%) rotate(-10deg)", opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideRight: "slideRight 0.3s ease-out",
        slideLeft: "slideLeft 0.3s ease-out",
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};