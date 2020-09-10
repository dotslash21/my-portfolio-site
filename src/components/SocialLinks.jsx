import React from "react"
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"

const SocialMenu = ({ socialLinks }) => {
  return (
    <div className="field is-grouped">
      {socialLinks.github && (
        <p className="control">
          <a
            className="button is-link is-inverted is-outlined is-medium"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-medium">
              <FaGithub className="is-size-1" />
            </span>
          </a>
        </p>
      )}

      {socialLinks.linkedin && (
        <p className="control">
          <a
            className="button is-link is-inverted is-outlined is-medium"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-medium">
              <FaLinkedinIn className="is-size-1" />
            </span>
          </a>
        </p>
      )}

      {socialLinks.facebook && (
        <p className="control">
          <a
            className="button is-link is-inverted is-outlined is-medium"
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-medium">
              <FaFacebook className="is-size-1" />
            </span>
          </a>
        </p>
      )}

      {socialLinks.twitter && (
        <p className="control">
          <a
            className="button is-link is-inverted is-outlined is-medium"
            href={socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon is-medium">
              <FaTwitter className="is-size-1" />
            </span>
          </a>
        </p>
      )}
    </div>
  )
}

export default SocialMenu
