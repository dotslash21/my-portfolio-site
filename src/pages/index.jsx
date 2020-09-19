import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

import contact_info from "../../content/profile/contact_info.json"
import personal_info from "../../content/profile/personal_info.json"
import social_info from "../../content/profile/social_info.json"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Hero
        title={personal_info.name}
        subtitle={personal_info.role}
        resumeLink={personal_info.resume_link}
        socialLinks={social_info}
      />
      <About
        image={data.file.childImageSharp.fluid}
        bio={personal_info.bio}
      />
      <Projects />
      <Skills />
      <Education />
      <Contact
        email={contact_info.primary_email}
        socialLinks={social_info}
      />
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/headshot.webp" }) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
