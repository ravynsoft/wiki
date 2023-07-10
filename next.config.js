const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  flexsearch: true,
  staticImage: true,
});
module.exports = withNextra({
  images: {
    loader: 'akamai',
    path: '/',
  },
});
