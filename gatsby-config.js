/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: `Arunangshu Biswas`,
    role: `Full Stack Developer`,
    bio: `I am Arunangshu Biswas, currently pursuing B.Tech in Computer
    Science and Engineering. I am a Fullstack Developer and have made
    various projects using various frameworks. I have a keen interest
    in Competitive Programming, Machine Learning and AI.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/data/` } },
  ],
}
