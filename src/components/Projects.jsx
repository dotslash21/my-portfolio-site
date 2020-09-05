import React from "react"

const Projects = () => {
  return (
    <section class="has-background-success has-text-white">
      <div className="container pt-6 pb-6">
        <h2 class="is-size-1 has-text-weight-bold mb-6">My Projects</h2>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p class="title">PROJECT 1</p>
                <p class="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p class="title">PROJECT 2</p>
                <p class="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p class="title">PROJECT 3</p>
                <p class="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p class="title">PROJECT 4</p>
                <p class="subtitle">Lorem Ipsum Dolor Sit Amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
