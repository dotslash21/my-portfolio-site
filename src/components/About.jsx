import React from "react"

const About = () => {
  return (
    <section id="about" className="pt-6 pb-6">
      <div className="container is-widescreen">
        <h2 className="is-size-1 has-text-weight-bold mb-6">About Me</h2>
        <div className="columns is-vcentered">
          <div className="column is-one-quarter">
            <figure className="image is-1by1">
              <img
                className="is-rounded"
                src="https://dotslash21.github.io/img/portrait.jpg"
              />
            </figure>
          </div>
          <div className="column">
            <p className="is-size-3 ml-6">
              I am Arunangshu Biswas, currently pursuing B.Tech in Computer
              Science and Engineering. I am a Fullstack Developer and have made
              various projects using various frameworks. I have a keen interest
              in Competitive Programming, Machine Learning and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
