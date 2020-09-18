import React from "react"
import Img from "gatsby-image"

const About = ({ image, bio }) => {
  return (
    <section id="about" className="pt-6 pb-6">
      <div className="container px-5">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          About Me
        </h2>
        <div className="columns is-vcentered is-centered">
          <div className="column is-narrow">
            <Img
              fluid={image}
              alt="Portrait"
              style={{
                margin: "auto",
                display: "block",
                position: "relative",
                width: "20em",
                maxWidth: "100%",
              }}
              imgStyle={{
                display: "block",
                height: "auto",
                width: "100%",
                borderRadius: "290486px",
              }}
            />
          </div>

          <div className="column is-half">
            <p className="is-size-3 has-text-justified">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
