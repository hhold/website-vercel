module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        c: ["Schoolbell", "cursive"],
        sf: ["Noto Serif KR", "serif"],
      },
      colors: {
        blue: {
          450: "#0000ff",
        },
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.blue.300"),
              '[class~="lead"]': { color: theme("colors.blue.400") },
              a: { color: theme("colors.blue.100") },
              strong: { color: theme("colors.blue.300") },
              "ul > li::before": { backgroundColor: theme("colors.blue.700") },
              hr: { borderColor: theme("colors.blue.800") },
              blockquote: {
                color: theme("colors.blue.100"),
                borderLeftColor: theme("colors.blue.800"),
              },
              h1: { color: theme("colors.blue.100") },
              h2: { color: theme("colors.blue.100") },
              h3: { color: theme("colors.blue.100") },
              h4: { color: theme("colors.blue.100") },
              code: { color: theme("colors.blue.100") },
              "a code": { color: theme("colors.blue.100") },
              pre: {
                color: theme("colors.blue.200"),
                backgroundColor: theme("colors.blue.800"),
              },
              thead: {
                color: theme("colors.blue.100"),
                borderBottomColor: theme("colors.blue.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.blue.800") },
            },
          },
        };
      },
    },
  },

  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
