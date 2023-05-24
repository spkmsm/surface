/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        small_phone: "320px",
        medium_mobile: "375px",
        large_mobile: "425px",
        tablet: "768px",
        small_laptop: "1024px",
        large_laptop: "1440px",
        desktop: "1280px",
        extra_large: "2560px",
      },
    },
  },
  plugins: [require("daisyui")],
};
