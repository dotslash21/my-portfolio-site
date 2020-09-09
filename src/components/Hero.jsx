import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"

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
          <div className="field is-grouped">
            <p className="control">
              <a
                className="button is-link is-inverted is-outlined is-large"
                href="https://drive.google.com/file/d/1QdnkPD9lAZkGZYnKOIBQRbBhSVtmYBQ1/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </a>
            </p>
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

      <div className="hero-foot">
        <div className="level">
          <div className="level-item py-5">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="button is-link is-inverted is-outlined is-medium"
                  href="https://github.com/dotslash21"
                  target="_blank"
                >
                  <span className="icon is-medium">
                    <FaGithub className="is-size-1" />
                  </span>
                </a>
              </p>

              <p className="control">
                <a
                  className="button is-link is-inverted is-outlined is-medium"
                  href="https://www.linkedin.com/in/arunangshubsws/"
                  target="_blank"
                >
                  <span className="icon is-medium">
                    <FaLinkedinIn className="is-size-1" />
                  </span>
                </a>
              </p>

              <p className="control">
                <a
                  className="button is-link is-inverted is-outlined is-medium"
                  href="https://www.facebook.com/itsmearunangshu"
                  target="_blank"
                >
                  <span className="icon is-medium">
                    <FaFacebook className="is-size-1" />
                  </span>
                </a>
              </p>

              <p className="control">
                <a
                  className="button is-link is-inverted is-outlined is-medium"
                  href="https://twitter.com/arunangshubsws"
                  target="_blank"
                >
                  <span className="icon is-medium">
                    <FaTwitter className="is-size-1" />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
