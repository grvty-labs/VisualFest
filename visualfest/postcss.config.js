module.exports = {
  plugins: [
    require('postcss-partial-import')({ extension: '.pcss' }),
    require('lost'),
    require('postcss-cssnext'),
    require('postcss-mixins'),
    require('postcss-will-change'),
    require('postcss-vertical-rhythm'),
    require('postcss-minify-selectors'),
    require('postcss-minify-params'),
  ],
};
