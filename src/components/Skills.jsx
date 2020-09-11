import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SkillItem from "./SkillItem"

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "skill" }
        }
        sort: {
          fields: childMarkdownRemark___frontmatter___rating
          order: DESC
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              rating
            }
            id
          }
        }
      }
    }
  `)

  return (
    <section id="skills" className="pt-6 pb-6">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Skillset
        </h2>

        <div className="columns is-centered is-multiline">
          {data.allFile.nodes.map(item => {
            return (
              <div className="column is-one-quarter">
                <SkillItem
                  skill={item.childMarkdownRemark.frontmatter.title}
                  rating={item.childMarkdownRemark.frontmatter.rating}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
