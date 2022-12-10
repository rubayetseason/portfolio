/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4ee1a0",

          secondary: "#242424",

          accent: "#d9d9d9",

          neutral: "#242424",

          "base-100": "#151515",

          info: "#62BCF4",

          success: "#6EE7C3",

          warning: "#C66606",

          error: "#F61353",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
