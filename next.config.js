const { remarkCodeHike } = require("@code-hike/mdx");

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true,
  // unstable_staticImage: true
});
module.exports = withNextra({
  images: {
    domains: ["pbs.twimg.com", "avatars.githubusercontent.com", "i.imgur.com"],
    loader: 'akamai',
    path: '/',
  },
});
