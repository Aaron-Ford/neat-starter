module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      'sans': ['Spartan', 'ui-sans-serif', 'system-ui', ...],
      'serif': ['Noto Serif', 'ui-serif', 'Georgia', ...],
      'mono': ['ui-monospace', 'SFMono-Regular', ...],
      'display': ['Oswald', ...],
      'body': ['Open Sans', ...],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
