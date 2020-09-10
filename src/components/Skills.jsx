import React from "react"
import SkillItem from "./SkillItem"

const Skills = () => {
  return (
    <section id="skills" className="pt-6 pb-6">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Skillset
        </h2>

        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <SkillItem skill="C++" rating="75" />
          </div>

          <div className="column is-one-quarter">
            <SkillItem skill="Java" rating="65" />
          </div>

          <div className="column is-one-quarter">
            <SkillItem skill="Python" rating="65" />
          </div>

          <div className="column is-one-quarter">
            <SkillItem skill="Backend Development" rating="75" />
          </div>

          <div className="column is-one-quarter">
            <SkillItem skill="Frontend Development" rating="65" />
          </div>

          <div className="column is-one-quarter">
            <SkillItem skill="Machine Learning" rating="60" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
