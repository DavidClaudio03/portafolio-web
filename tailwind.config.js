module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-move': {
          '0%': { borderImageSource: 'linear-gradient(to right, blue, transparent)' },
          '25%': { borderImageSource: 'linear-gradient(to bottom, blue, transparent)' },
          '50%': { borderImageSource: 'linear-gradient(to left, blue, transparent)' },
          '75%': { borderImageSource: 'linear-gradient(to top, blue, transparent)' },
          '100%': { borderImageSource: 'linear-gradient(to right, blue, transparent)' },
        },
      },
      animation: {
        'border-move': 'border-move 3s linear infinite',
      },
    },
  },
  plugins: [],
};
