import React from "react"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <section id="projects" className="has-background-white-ter pt-6 pb-6">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Projects
        </h2>

        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <ProjectItem
              image="https://bulma.io/images/placeholders/1280x960.png"
              title="Project 1"
              description="Lorem Ipsum Dolor Sit Amet"
              preview="#"
              code="#"
            />
          </div>

          <div className="column is-one-quarter">
            <ProjectItem
              image="https://bulma.io/images/placeholders/1280x960.png"
              title="Project 2"
              description="Lorem Ipsum Dolor Sit Amet"
              preview="#"
              code="#"
            />
          </div>

          <div className="column is-one-quarter">
            <ProjectItem
              image="https://bulma.io/images/placeholders/1280x960.png"
              title="Project 3"
              description="Lorem Ipsum Dolor Sit Amet"
              preview="#"
            />
          </div>

          <div className="column is-one-quarter">
            <ProjectItem
              image="https://bulma.io/images/placeholders/1280x960.png"
              title="Project 4"
              description="Lorem Ipsum Dolor Sit Amet"
              code="#"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
