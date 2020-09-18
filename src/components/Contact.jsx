import React from "react"
import SocialMenu from "./SocialLinks"

const Contact = ({ email, socialLinks }) => {
  return (
    <section id="contact" className="pt-6 pb-6">
      <div className="container px-5">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          Contact Me
        </h2>

        <div className="columns is-centered">
          {(email || socialLinks) && (
            <div className="column is-one-quarter">
              {email && (
                <>
                  <h3 className="is-size-2">E-Mail me at</h3>
                  <p className="is-size-4">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </>
              )}

              {socialLinks && (
                <>
                  <h3 className="is-size-2">Connect with me</h3>
                  <SocialMenu socialLinks={socialLinks} isInverted={false} />
                </>
              )}
            </div>
          )}

          <div className="column is-one-quarter">
            <h3 className="is-size-2 mb-3">Drop a message</h3>
            <form>
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <div className="control">
                  <textarea
                    id="message"
                    name="message"
                    className="textarea"
                    placeholder="Please leave your message here"
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <button
                    className="button is-primary"
                    type="submit"
                    onClick={e => {
                      alert("Functionality not yet implemented! :(")
                      e.preventDefault()
                    }}
                  >
                    Submit
                  </button>
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
