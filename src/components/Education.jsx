import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useWindowSize } from "../utils/custom_hooks"
import EducationItem from "./EducationItem"

/**
 * Return the bulma-timeline css classes according to the current viewport size.
 * @param {Currrent viewport dimentions} size
 */
const getTimelineClasses = size => {
  let timelineClasses = "timeline"

  if (size.width > 480) {
    timelineClasses += " is-centered"
  }

  return timelineClasses
}

const Education = () => {
  // Get the current viewport size
  const size = useWindowSize()

  // Get the education entities
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "education" }
        }
        sort: {
          fields: childMarkdownRemark___frontmatter___start_year
          order: DESC
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              start_year
              end_year
              institution
              degree
              field
              grade
              max_grade
            }
            id
          }
        }
      }
    }
  `)

  return (
    <section id="education" className="has-background-grey-lighter pt-6 pb-6">
      <div className="container px-5">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Education
        </h2>

        <div className={getTimelineClasses(size)}>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Present</span>
          </header>

          {data.allFile.nodes.map(item => {
            return (
              <EducationItem
                key={item.childMarkdownRemark.id}
                startYear={item.childMarkdownRemark.frontmatter.start_year}
                endYear={item.childMarkdownRemark.frontmatter.end_year}
                institution={item.childMarkdownRemark.frontmatter.institution}
                degree={item.childMarkdownRemark.frontmatter.degree}
                field={item.childMarkdownRemark.frontmatter.field}
                grade={item.childMarkdownRemark.frontmatter.grade}
                maxGrade={item.childMarkdownRemark.frontmatter.max_grade}
              />
            )
          })}

          <header className="timeline-header">
            <span className="tag is-medium is-primary">Past</span>
          </header>
        </div>
      </div>
    </section>
  )
}

export default Education
