import React from "react"

const Navbar = () => {
  return (
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#">
            Home
          </a>
          <a class="navbar-item" href="#">
            About Me
          </a>
          <a class="navbar-item" href="#">
            My Works
          </a>
          <a class="navbar-item" href="#">
            My Blog
          </a>
          <a class="navbar-item" href="#">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
