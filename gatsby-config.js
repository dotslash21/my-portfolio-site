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
    email: `arunangshubsws@gmail.com`,
    resumeLink: `https://drive.google.com/file/d/1QdnkPD9lAZkGZYnKOIBQRbBhSVtmYBQ1/view?usp=sharing`,
    socialLinks: {
      github: `https://github.com/dotslash21/`,
      linkedin: `https://www.linkedin.com/in/arunangshubsws/`,
      facebook: `https://www.facebook.com/itsmearunangshu/`,
      twitter: `https://twitter.com/arunangshubsws`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./static/images/` },
    },
  ],
}
