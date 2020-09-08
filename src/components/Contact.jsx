import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="pt-6 pb-6">
      <div className="container is-widescreen">
        <h2 className="is-size-1 has-text-weight-bold mb-6">Contact Me</h2>
        <p className="is-size-4 mb-6">Please feel free to drop in your message, I'll get back to you soon.</p>
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <a className="button is-primary" type="submit">Submit</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
