import React from "react"
import { FaEye, FaCode } from "react-icons/fa"
import Img from "gatsby-image"

const ProjectItem = ({ image, title, description, preview, code }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <Img
            fixed={image}
            alt={title}
            style={{
              width: "100%",
              display: "block",
              position: "relative",
              margin: "0",
              padding: "0",
              maxWidth: "100%",
            }}
            imgStyle={{
              width: "100%",
              bottom: "0",
              left: "0",
              position: "absolute",
              right: "0",
              top: "0",
              display: "block",
              maxWidth: "100%",
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
