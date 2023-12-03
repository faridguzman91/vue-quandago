/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#363636",
          secondary: "#446dab",
          neutral: "#050806",
          "base-100": "#ffffff",
        },
        darkTheme: {
          primary: "#f2f2f2",
          secondary: "#c8d5e8",
          neutral: "#0e0821",
          "base-100": "#172632",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontSize: {
        xs: "1.6rem",
        sm: "2.2rem",
        md: "3.2rem",
        lg: "4rem",
        xl: "5.8rem",
        xxl: "6rem",
      },
      maxWidth: {
        "bd-xs": "32rem",
        "bd-sm": "48rem",
        "bd-md": "76.8rem",
        "bd-lg": "99.2rem",
      },
      gridTemplateRows: {
        "bd-base": "auto 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
};
