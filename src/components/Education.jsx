import React from "react"

const Education = () => {
  return (
    <section id="education" className="has-background-white-ter pt-6 pb-6">
      <div className="container is-widescreen">
        <h2 className="is-size-1 has-text-weight-bold mb-6">My Education</h2>

        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Present</span>
          </header>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">2017-2021</p>
              <p className="title">
                Govt. College of Engineering and Textile Technology, Berhampore
              </p>
              <p className="subtitle">
                B.Tech in Computer Science and Engineering
              </p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">2014-2016</p>
              <p className="title">Hirendra Leela Patranavs School</p>
              <p className="subtitle">Higher Secondary Education</p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">2004-2014</p>
              <p className="title">Hirendra Leela Patranavs School</p>
              <p className="subtitle">Secondary Education</p>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-medium is-primary">Past</span>
          </header>
        </div>
      </div>
    </section>
  )
}

export default Education
