/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { paper: "#F4F0FF", ink: "#16113A", grape: "#6B4EFF", pop: "#FF4F9A", sun: "#FFD84D", mint: "#3EE0A8" },
      boxShadow: { hard: "5px 5px 0 #16113A" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"] },
    },
  },
  plugins: [],
};
