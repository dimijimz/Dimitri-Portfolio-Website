/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-text-color": "#fff",
        "gray-900": "#111827",
        dimitri: "rgb(115, 115, 115)",
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.6)",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(255, 255, 255, 0.05)",
        },
        silver: "#c7c7cc",
        "gray-600": "#4b5563",
        darkslategray: {
          "100": "#3c3c43",
          "200": "#252b42",
        },
        dimgray: {
          "100": "#737373",
          "200": "#6d7076",
          "300": "#636369",
          "400": "rgba(99, 99, 105, 0.09)",
        },
        lightgray: "#d1d5db",
      },
      spacing: {},
      fontFamily: {
        "btn-text": "Montserrat",
        inter: "Inter",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "5xl-1": "24.1px",
        "63xl": "82px",
        "8xs": "5px",
        "81xl": "100px",
        "17xl": "36px",
      },
    },
    fontSize: {
      mini: "15px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      base: "16px",
      xs: "12px",
      lgi: "19px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
