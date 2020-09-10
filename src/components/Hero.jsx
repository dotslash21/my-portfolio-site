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
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" onClick={() => scrollTo("#about")}>
                  About
                </a>
                <a
                  className="navbar-item"
                  onClick={() => scrollTo("#projects")}
                >
                  Projects
                </a>
                <a className="navbar-item" onClick={() => scrollTo("#skills")}>
                  Skills
                </a>
                <a
                  className="navbar-item"
                  onClick={() => scrollTo("#education")}
                >
                  Education
                </a>
                <a className="navbar-item" onClick={() => scrollTo("#contact")}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container">
          <h1 className="title is-uppercase is-size-1">
            {title || `John Smith`}
          </h1>
          <h2 className="subtitle is-capitalized is-size-3">
            {subtitle || `The Developer`}
          </h2>
          <div className="field is-grouped">
            {resumeLink && (
              <p className="control">
                <a
                  className="button is-link is-inverted is-outlined is-large"
                  href={resumeLink}
                  target="_blank"
                >
                  Download Resume
                </a>
              </p>
            )}
            <p className="control">
              <a
                className="button is-inverted has-text-primary is-large"
                onClick={() => scrollTo("#contact")}
              >
                Hire Me
              </a>
            </p>
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
