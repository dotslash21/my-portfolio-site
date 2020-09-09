import React from "react"
import { FaEye, FaCode } from "react-icons/fa"

const Projects = () => {
  return (
    <section id="projects" className="has-background-white-ter pt-6 pb-6">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Projects
        </h2>

        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title">PROJECT 1</p>
                <p className="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>

              <div className="card-footer">
                <a href="#" className="card-footer-item">
                  <FaEye className="is-size-4" />
                </a>
                <a href="#" className="card-footer-item">
                  <FaCode className="is-size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title">PROJECT 2</p>
                <p className="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>

              <div className="card-footer">
                <a href="#" className="card-footer-item">
                  <FaEye className="is-size-4" />
                </a>
                <a href="#" className="card-footer-item">
                  <FaCode className="is-size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title">PROJECT 3</p>
                <p className="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>

              <div className="card-footer">
                <a href="#" className="card-footer-item">
                  <FaEye className="is-size-4" />
                </a>
                <a href="#" className="card-footer-item">
                  <FaCode className="is-size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title">PROJECT 4</p>
                <p className="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>

              <div className="card-footer">
                <a href="#" className="card-footer-item">
                  <FaEye className="is-size-4" />
                </a>
                <a href="#" className="card-footer-item">
                  <FaCode className="is-size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
