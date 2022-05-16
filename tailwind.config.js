module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "200%": "200%",
    },
    extend: {
      colors: {
        blue: {
          "deep-dark": "var(--deep-dark-blue)",
          dark: "var(--dark-blue)",
        },
        lgbtq: {
          pink: "var(--t-pink)",
          blue: "var(--t-blue)",
        },
      },
      animation: {
        drop: "drop-in 1s",
        slideBackGround: "slide-bg 5s linear infinite",
      },
      keyframes: {
        "slide-bg": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        "drop-in": {
          "0%": {
            transform: "translateY(-100%) scale(0)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0,0) scale(1)",
            "-webkit-transform": "translate(0,0) scale(1)",
            "-ms-transform": "translate(0,0) scale(1)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
