/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require("./config/site")

module.exports = {
  siteMetadata: { ...config },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        remarkPlugins: [
          require('remark-math'),
          require('remark-html-katex'),
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: 'gatsby-code-title'
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 800,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-autolink`,
            },
          },
        ],
      },
    },
    { resolve: `gatsby-plugin-postcss` },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphqlTypes.d.ts`,
        codegen: true,
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          './config/gatsby-node.ts'
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          require("path").join(
            process.cwd(),
            "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"
          ),
        ],
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ["emoji"], // Don't remove this selector
        ignore: ['katex.min.css', 'code.css', 'post.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:400,700`, `Noto Sans JP:400,700`],
        display: `swap`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-lodash`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
  ],
}
