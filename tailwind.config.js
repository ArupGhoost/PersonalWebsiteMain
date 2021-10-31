module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : {
        'first-image' : "url('/src/img/ghost-frontend-image-1.png')",
        'second-image' : "url('/src/img/backimage.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
