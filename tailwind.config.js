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
          DEFAULT: '#afffda',
        },
        secondary: {
          DEFAULT: '#234468',
        },
        tertiary: {
          DEFAULT: '#bacbd9',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
