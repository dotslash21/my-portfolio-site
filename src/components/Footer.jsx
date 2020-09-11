import React from "react"
import { FaHeart, FaSmileWink } from "react-icons/fa"

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer has-background-dark has-text-white-ter"
    >
      <div className="content container is-size-5">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p>Copyright © 2020</p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <p>Pre-Release Version</p>
            </div>
          </div>
        </div>

        <div className="has-text-centered">
          Made with <FaHeart className="has-text-danger is-size-6" /> by your's
          truly! <FaSmileWink className="has-text-warning is-size-6" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
