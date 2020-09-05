import React from "react"

const Hero = () => {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Projects</a>
                <a className="navbar-item">Education</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="hero-body">
        <div className="container">
          <h1 className="title is-uppercase is-size-1">Arunangshu Biswas</h1>
          <h2 className="subtitle is-capitalized is-size-3">
            Full Stack Developer
          </h2>
          <a
            className="button is-link is-inverted is-outlined is-large"
            href="https://drive.google.com/file/d/1QdnkPD9lAZkGZYnKOIBQRbBhSVtmYBQ1/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-foot"></div>
    </section>
  )
}

export default Hero
