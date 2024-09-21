/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        // ### Primary
        clrBlue: {
          veryDarkDesaturated: "hsl(229, 23%, 23%)",
          darkGrayish: "hsl(227, 10%, 46%)",
        },
        clrCyan: {
          dark: "hsl(185, 75%, 39%)",
        },
        // ### Neutral
        clr_white: {
          transparent: "hsla(0, 0%, 100%, 0.75)", // paragraphs
        },
        clrGray: {
          dark: "hsl(0, 0%, 59%)",
        },
      },

      fontFamily: {
        display: '"Kumbh Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
