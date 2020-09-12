import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import SocialMenu from "./SocialLinks"

const Hero = ({ title, subtitle, resumeLink, socialLinks }) => {
  return (
    <section id="hero" className="hero is-fullheight is-primary">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroC"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <nav id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a
                  className="navbar-item"
                  onClick={e => {
                    scrollTo("#about")
                    e.preventDefault()
                  }}
                  href="#about"
                >
                  About
                </a>
                <a
                  className="navbar-item"
                  onClick={e => {
                    scrollTo("#projects")
                    e.preventDefault()
                  }}
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className="navbar-item"
                  onClick={e => {
                    scrollTo("#skills")
                    e.preventDefault()
                  }}
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  className="navbar-item"
                  onClick={e => {
                    scrollTo("#education")
                    e.preventDefault()
                  }}
                  href="#education"
                >
                  Education
                </a>
                <a
                  className="navbar-item"
                  onClick={e => {
                    scrollTo("#contact")
                    e.preventDefault()
                  }}
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container">
          <h1 className="title is-uppercase is-size-1 is-size-3-touch is-size-3-mobile">
            {title || `John Smith`}
          </h1>
          <h2 className="subtitle is-capitalized is-size-3 is-size-5-touch is-size-5-mobile">
            {subtitle || `The Developer`}
          </h2>
          <div className="buttons are-medium">
            {resumeLink && (
              <a
                className="button is-link is-inverted is-outlined"
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            )}
            <button
              className="button is-inverted has-text-primary"
              onClick={() => scrollTo("#contact")}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {socialLinks && (
        <div className="hero-foot">
          <div className="level">
            <div className="level-item py-5">
              <SocialMenu socialLinks={socialLinks} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
