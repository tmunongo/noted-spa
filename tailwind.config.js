/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#020303",
        medium: "#14161f",
        light: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
}
