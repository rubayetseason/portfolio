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
          primary: "#318296",

          secondary: "#111827",

          accent: "#8270f4",

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
