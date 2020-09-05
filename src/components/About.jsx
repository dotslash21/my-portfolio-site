import React from "react"

const About = () => {
  return (
    <div class="container is-widescreen">
      <h2 class="is-size-1 has-text-weight-bold mt-6 mb-6">About Me</h2>
      <div className="columns is-vcentered mb-6">
        <div className="column is-one-quarter">
          <figure class="image is-1by1">
            <img
              class="is-rounded"
              src="https://dotslash21.github.io/img/portrait.jpg"
            />
          </figure>
        </div>
        <div className="column">
          <p class="is-size-3 ml-6">
            I am Arunangshu Biswas, currently pursuing B.Tech in Computer
            Science and Engineering. I am a Fullstack Developer and have made
            various projects using various frameworks. I have a keen interest in
            Competitive Programming, Machine Learning and AI.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
