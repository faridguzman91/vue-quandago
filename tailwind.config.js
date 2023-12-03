/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#0094ff",
          "secondary": "#008e00",
          "accent": "#008c00",
          "neutral": "#050806",
          "base-100": "#ffffff",
          "info": "#006cc1",
          "success": "#72b100",
          "warning": "#ffa700",
          "error": "#ce0033",
        },
        darkTheme: {
          "primary": "#ec00ff",
          "secondary": "#00f600",
          "accent": "#ad8c00",
          "neutral": "#0e0821",
          "base-100": "#172632",
          "info": "#0064fc",
          "success": "#00cd6e",
          "warning": "#c54200",
          "error": "#f25776",
        }
      }
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
      boxShadow: {
        base: "0 0.4rem 0.4rem  #000001",
        "base-dark": "0 0 0.6rem 0 white",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
};
