/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Arunangshu Biswas - A Full Stack Developer`,
    description: `Final Year CSE Undergraduate, Full Stack Developer, Android Developer and ML/DL Enthusiast`,
    author: `Arunangshu Biswas (arunangshubsws@gmail.com)`,
    twitterUsername: `@arunangshubsws`,
    image: `/website-thumbnail.png`,
    siteUrl: `https://arunangshu.xyz`,
  },
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
      resolve: `gatsby-source-filesystem`,
      options: { name: `education`, path: `content/education` },
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
    `gatsby-plugin-react-helmet`,
  ],
}
