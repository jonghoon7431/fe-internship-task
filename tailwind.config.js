/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-normal": "#475569",
        "primary-light": "#5C6D86",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".main-button": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          border: "1px solid grey",
          "border-radius": "12px",
          padding: "12px 16px",
          width: "24rem",
          "font-size": "1.2rem",
          "&:hover": {
            "background-color": "#475569",
            color: "white",
          },
        },
        ".button-submit": {
          padding: "8px 12px",
          "background-color": "#475569",
          color: "white",
          "border-radius": "8px",
          "&:hover": {
            "background-color": "#5C6D86",
          },
        },
        ".button-secondary": {
          padding: "8px 12px",
          "background-color": "white",
          color: "black",
          border: "1px solid #475569",
          "border-radius": "8px",
          "&:hover": {
            "background-color": "#5C6D86",
            color: "white",
          },
        },
        ".container": {
          height: "100%",
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        },
        ".form-section": {
          display: "flex",
          "flex-direction": "column",
          gap: "1rem",
          width: "50%",
        },
        ".title-text": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          height: "20%",
          "font-size": "2rem",
          "font-weight": "600",
        },
        ".input-auth": {
          border: "1px solid #DEDEDE",
          "border-radius": "4px",
          "font-size": "0.8rem",
          height: "2rem",
          padding: "0.5rem",
        },
      });
    },
  ],
};
