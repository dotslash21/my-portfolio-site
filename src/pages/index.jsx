import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home({ data }) {
  return (
    <>
      <Hero
        title={data.site.siteMetadata.name}
        subtitle={data.site.siteMetadata.role}
        resumeLink={data.site.siteMetadata.resumeLink}
        socialLinks={data.site.siteMetadata.socialLinks}
      />
      <About image={data.file.childImageSharp.fixed} bio={data.site.siteMetadata.bio} />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        role
        bio
        resumeLink
        socialLinks {
          github
          linkedin
          facebook
          twitter
        }
      }
    },
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
