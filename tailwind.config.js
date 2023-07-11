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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        50: "12.5rem",
        46: "11.5rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
      fontSize: {
        lssss: "0.4rem",
        lsss: "0.5rem",
        lss: "0.6rem",
        ls: "0.7rem",
      },
    },
  },
  plugins: [],
};
