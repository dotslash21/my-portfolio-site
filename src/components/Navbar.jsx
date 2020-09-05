import React from "react"

const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#">
            Home
          </a>
          <a className="navbar-item" href="#">
            About Me
          </a>
          <a className="navbar-item" href="#">
            My Works
          </a>
          <a className="navbar-item" href="#">
            My Blog
          </a>
          <a className="navbar-item" href="#">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
