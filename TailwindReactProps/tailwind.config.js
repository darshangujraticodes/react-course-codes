// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      // color Used in Website theme
      primary: "#3368C0",
      secondary: "#EEF4FF",
      background: "#F7FAFF",
      darkblue: "1B4282",
      lightblue: "#BDD6FF",
      // dimblue: "",
      overlaybg: "rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};
