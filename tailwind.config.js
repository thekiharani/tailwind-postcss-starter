module.exports = {
  purge: [
      './public/**/*.html',
      './public/**/*.js',
      './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto',
        'sacramento': 'Sacramento'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
