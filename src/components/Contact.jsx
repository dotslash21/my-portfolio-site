import React from "react"
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="pt-6 pb-6">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold mb-6">Contact Me</h2>

        <div className="columns is-centered">
          <div className="column">
            <h3 className="is-size-2">E-Mail me at</h3>
            <p className="is-size-4">
              <a href="mailto:arunangshubsws@gmail.com">
                arunangshubsws@gmail.com
              </a>
            </p>

            <h3 className="is-size-2 mt-6 mb-3">Connect with me</h3>
            <p className="is-size-4">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="button is-link is-outlined is-medium"
                    href="https://github.com/dotslash21"
                    target="_blank"
                  >
                    <span className="icon is-medium">
                      <FaGithub className="is-size-1" />
                    </span>
                  </a>
                </p>

                <p className="control">
                  <a
                    className="button is-link is-outlined is-medium"
                    href="https://www.linkedin.com/in/arunangshubsws/"
                    target="_blank"
                  >
                    <span className="icon is-medium">
                      <FaLinkedinIn className="is-size-1" />
                    </span>
                  </a>
                </p>

                <p className="control">
                  <a
                    className="button is-link is-outlined is-medium"
                    href="https://www.facebook.com/itsmearunangshu"
                    target="_blank"
                  >
                    <span className="icon is-medium">
                      <FaFacebook className="is-size-1" />
                    </span>
                  </a>
                </p>

                <p className="control">
                  <a
                    className="button is-link is-outlined is-medium"
                    href="https://twitter.com/arunangshubsws"
                    target="_blank"
                  >
                    <span className="icon is-medium">
                      <FaTwitter className="is-size-1" />
                    </span>
                  </a>
                </p>
              </div>
            </p>
          </div>

          <div className="column">
          <h3 className="is-size-2 mb-3">Feel free to drop a message</h3>
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email input"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped is-grouped-right">
                <p className="control">
                  <a className="button is-primary" type="submit">
                    Submit
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
