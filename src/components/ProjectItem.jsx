import React from "react"
import { FaEye, FaCode } from "react-icons/fa"
import Img from "gatsby-image"

const ProjectItem = ({ image, title, description, preview, code }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <Img
            fluid={image}
            alt={title}
            style={{
              display: "block",
              position: "relative",
            }}
            imgStyle={{
              display: "block",
              height: "17.3em",
              width: "100%",
            }}
          />
        </div>
        <div className="card-content">
          <p className="title">{title}</p>
          <p className="subtitle">{description}</p>
        </div>

        <div className="card-footer">
          {preview && (
            <a
              href={preview}
              aria-label="Link to the preview"
              className="card-footer-item"
              target="_blank"
              rel="noreferrer"
            >
              <FaEye className="is-size-4" />
            </a>
          )}
          {code && (
            <a
              href={code}
              aria-label="Link to the code"
              className="card-footer-item"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode className="is-size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
