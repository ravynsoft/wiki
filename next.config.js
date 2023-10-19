const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  webpack(config) {
    const allowedSvgRegex = /public\/assets\/iconoir\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })
    return config
  },
})
