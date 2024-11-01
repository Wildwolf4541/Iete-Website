/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alatsi: ["Alatsi", "sans-serif"],
      },
      textShadow: {
        lx: "0 40px 100px red",
      },
      textStroke: {
        width: "3px",
        color: "black",
      },
    },
  },
  plugins: [],
};
