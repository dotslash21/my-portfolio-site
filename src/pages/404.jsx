import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"

const NotFoundPage = () => {
  return (
    <section className="hero is-primary is-fullheight">
      <SEO title="Not Found!" />
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-uppercase is-size-1 is-size-3-touch is-size-3-mobile">
            404 Page Not Found
          </p>
          <p className="subtitle is-size-3 is-size-5-touch is-size-5-mobile">
            An unexpected error has occurred. Please contact the site owner.
          </p>
          <Link
            className="button is-link is-inverted is-outlined is-medium"
            to="/"
          >
            HOME
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
