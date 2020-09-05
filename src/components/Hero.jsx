import React from "react"

const Hero = () => {
  return (
    <section class="hero is-primary is-fullheight">
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Projects</a>
                <a class="navbar-item">Education</a>
                <a class="navbar-item">Contact</a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div class="hero-body">
        <div class="container">
          <h1 class="title is-uppercase is-size-1">Arunangshu Biswas</h1>
          <h2 class="subtitle is-capitalized is-size-3">
            Full Stack Developer
          </h2>
          <a
            class="button is-link is-inverted is-outlined is-large"
            href="https://drive.google.com/file/d/1QdnkPD9lAZkGZYnKOIBQRbBhSVtmYBQ1/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="hero-foot"></div>
    </section>
  )
}

export default Hero
