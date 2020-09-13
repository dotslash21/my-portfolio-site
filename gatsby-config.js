/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `assets`, path: `content/assets` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `project`, path: `content/project` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `skill`, path: `content/skill` },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: "content",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
