import React from "react"

const Skills = () => {
  return (
    <section className="pt-6 pb-6">
      <div className="container">
        <h2 class="is-size-1 has-text-weight-bold mb-6">My Skillset</h2>
        <div className="columns">
          <div className="column">
            <p className="is-size-4">C/C++</p>
            <progress className="progress" value="7" max="10">
              70%
            </progress>
          </div>
          <div className="column">
            <p className="is-size-4">Java</p>
            <progress className="progress" value="8" max="10">
              80%
            </progress>
          </div>
          <div className="column">
            <p className="is-size-4">Python</p>
            <progress className="progress" value="7" max="10">
              70%
            </progress>
          </div>
          <div className="column">
            <p className="is-size-4">Web Development</p>
            <progress className="progress" value="9" max="10">
              90%
            </progress>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills