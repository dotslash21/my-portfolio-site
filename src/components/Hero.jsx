import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = ({ title, subtitle }) => {
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
          <h1 className="title is-uppercase is-size-1">{title}</h1>
          <h2 className="subtitle is-capitalized is-size-3">{subtitle}</h2>
          <div>
          <a
              className="button is-link is-inverted is-outlined is-large mr-1"
              href="https://drive.google.com/file/d/1QdnkPD9lAZkGZYnKOIBQRbBhSVtmYBQ1/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </a>
            <a
              className="button is-inverted has-text-primary is-large ml-1"
              onClick={() => scrollTo("#contact")}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <div className="hero-foot"></div>
    </section>
  )
}

export default Hero
