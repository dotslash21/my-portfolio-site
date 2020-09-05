import React from "react"

const Projects = () => {
  return (
    <section className="has-background-success has-text-white pt-6 pb-6">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold mb-6">My Projects</h2>
        <div className="columns">
          <div className="column">
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
            </div>
          </div>

          <div className="column">
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
            </div>
          </div>

          <div className="column">
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
            </div>
          </div>

          <div className="column">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
