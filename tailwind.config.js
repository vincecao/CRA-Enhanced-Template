module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  theme: {},
  extend: {},
  variants: {
    opacity: ['hover', 'disabled', 'focus'],
    cursor: ['hover', 'disabled', 'focus'],
  },
  corePlugins: {
    float: false,
  },
};
