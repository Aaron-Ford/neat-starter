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
    aspectRatio: {
                none: 0,
                square: [1, 1],
                "16/9": [16, 9],
                "4/3": [4, 3],
                "21/9": [21, 9]
            },
    extend: {
      colors: {
        primary: {
          '50':  '#eef8f7',
          '100': '#daf6f0',
          '200': '#afffda',
          '300': '#79e6c7',
          '400': '#2ed3a3',
          '500': '#10ba7c',
          '600': '#0e9e60',
          '700': '#158052',
          '800': '#186446',
          '900': '#16513b',
          DEFAULT : '#afffda',
        },
        secondary: {
          '50':  '#f4fafb',
          '100': '#e6f6fa',
          '200': '#c5eaf5',
          '300': '#9cd8f0',
          '400': '#5db7ea',
          '500': '#2d90e1',
          '600': '#216cce',
          '700': '#2055a8',
          '800': '#234468',
          '900': '#19345e',
          DEFAULT: '#234468',
        },
        tertiary: {
          '50':  '#f4f8f9',
          '100': '#eaf3f6',
          '200': '#d2e6ed',
          '300': '#bacbd9',
          '400': '#7eb2d6',
          '500': '#508cc5',
          '600': '#3d69ac',
          '700': '#38528b',
          '800': '#304069',
          '900': '#283452',
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
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
          require("@tailwindcss/typography"),
          require("tailwindcss-responsive-embed"),
          require("tailwindcss-aspect-ratio"),
      ]
};
