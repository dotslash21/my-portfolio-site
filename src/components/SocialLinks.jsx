import React from "react"
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"

const SocialMenu = ({ socialLinks, isInverted = true }) => {
  const buttonClasses = `button is-info ${
    isInverted ? "is-inverted" : ""
  } is-outlined is-medium`

  return (
    <div className="buttons">
      {socialLinks.github && (
        <a
          className={buttonClasses}
          href={socialLinks.github}
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon is-medium">
            <FaGithub className="is-size-1" />
          </span>
        </a>
      )}

      {socialLinks.linkedin && (
        <a
          className={buttonClasses}
          href={socialLinks.linkedin}
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon is-medium">
            <FaLinkedinIn className="is-size-1" />
          </span>
        </a>
      )}

      {socialLinks.facebook && (
        <a
          className={buttonClasses}
          href={socialLinks.facebook}
          aria-label="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon is-medium">
            <FaFacebook className="is-size-1" />
          </span>
        </a>
      )}

      {socialLinks.twitter && (
        <a
          className={buttonClasses}
          href={socialLinks.twitter}
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon is-medium">
            <FaTwitter className="is-size-1" />
          </span>
        </a>
      )}
    </div>
  )
}

export default SocialMenu
