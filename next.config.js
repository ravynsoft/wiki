const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/material-ocean.json");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        { theme, staticMediaQuery: "not screen, (max-width: 1080px)" },
      ],
    ],
  },
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
