import React from "react"
import SocialMenu from "./SocialLinks"

const Contact = ({ email, socialLinks }) => {
  return (
    <section id="contact" className="pt-6 pb-6">
      <div className="container">
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
                  <h3 className="is-size-2 mt-6 mb-3">Connect with me</h3>
                  <SocialMenu socialLinks={socialLinks} isInverted={false} />
                </>
              )}
            </div>
          )}

          <div className="column is-narrow">
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

              <div className="field is-grouped is-grouped-centered">
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
