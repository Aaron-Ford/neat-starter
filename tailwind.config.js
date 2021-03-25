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
      colors: {
        primary: {
          light: '#afffdb',
          DEFAULT: '#afffda',
          dark: '#afffdc',
        },
      },
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
