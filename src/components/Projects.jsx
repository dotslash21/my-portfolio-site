import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectItem from "./ProjectItem"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "project" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            id
            frontmatter {
              title
              description
              preview_link
              code_link
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="projects" className="has-background-grey-lighter pt-6 pb-6">
      <div className="container px-5">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Projects
        </h2>

        <div className="columns is-centered is-multiline">
          {data.allFile.nodes.map(item => (
            <div
              className="column is-one-quarter"
              key={item.childMarkdownRemark.id}
            >
              <ProjectItem
                image={
                  item.childMarkdownRemark.frontmatter.thumbnail.childImageSharp
                    .fluid
                }
                title={item.childMarkdownRemark.frontmatter.title}
                description={item.childMarkdownRemark.frontmatter.description}
                preview={item.childMarkdownRemark.frontmatter.preview_link}
                code={item.childMarkdownRemark.frontmatter.code_link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
