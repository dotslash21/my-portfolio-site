import React from "react"
import { FaEye, FaCode } from "react-icons/fa"

const ProjectItem = ({ image, title, description, preview, code }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">{title}</p>
          <p className="subtitle">{description}</p>
        </div>

        <div className="card-footer">
          {preview && (
            <a
              href={preview}
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
