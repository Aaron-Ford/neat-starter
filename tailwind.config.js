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
      'sans': ['"Spartan"'],
      'serif': ['"Noto Serif"'],
      'mono': ['"Noto Serif"'],
      'display': ['"Spartan"'],
      'body': ['"Noto Serif"'],
    }    
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
