/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#031531",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        todoShadow: "0px 0px 20px 4px rgba(104, 86, 96, 0.8)",
      },
    },
  },
  plugins: [],
}

