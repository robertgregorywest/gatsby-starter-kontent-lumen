const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

const url = 'https://suspicious-lumiere-faa869.netlify.com/'

module.exports = {
  // These properties are used by gatsby-plugin-sitemap
  // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use
  siteMetadata: {
    url,
    siteUrl: url,
  },
  plugins: [
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        deliveryClientConfig: {
          projectId: '00676a8d-358c-0084-f2f2-33ed466c480a', // Fill in your Project ID
        },
        languageCodenames: [
          'en-US', // Or the languages in your project (Project settings -> Localization)
          'cs-CZ',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: '' }, // add own google analytics trackingId
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
  ],
}
