/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Jost",
    },
    backgroundImage: {
      back: "url(/src/assets/satu.webp)",
      "custom-gradient": "linear-gradient(to right, #10b981, #d9f99d)",
      "instagram-gradient": "linear-gradient(to right, #a855f7, #fbbf24)",
      "github-gradient": "linear-gradient(to right, #333333, #000000)",
    },
    extend: {
      backgroundImage: {
        "custom-gradient-hover": "linear-gradient(to right, #3b82f6, #6ee7b7)",
        "instagram-gradient-hover": "linear-gradient(to right, #fcb045, #fd1d1d)",
        "github-gradient-hover": "linear-gradient(to right, #E2D9D9FF, #333333)",
      },
    },
  },
  plugins: [],
};
