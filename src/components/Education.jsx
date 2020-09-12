import React from "react"

import { useWindowSize } from "../utils/custom_hooks"

/**
 * Return the bulma-timeline css classes according to the current viewport size.
 * @param {Currrent viewport dimentions} size 
 */
const getTimelineClasses = (size) => {
  let timelineClasses = "timeline"

  if (size.width > 480) {
    timelineClasses += " is-centered"
  }

  return timelineClasses
}

const Education = () => {
  // Get the current viewport size
  const size = useWindowSize()

  return (
    <section id="education" className="has-background-white-ter pt-6 pb-6">
      <div className="container is-widescreen">
        <h2 className="is-size-1 has-text-weight-bold has-text-centered mb-6">
          My Education
        </h2>

        <div className={getTimelineClasses(size)}>
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
              <p className="subtitle is-4">
                B.Tech in Computer Science and Engineering
              </p>
              <p className="subtitle">Grade: 8.2/10</p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">2014-2016</p>
              <p className="title">Hirendra Leela Patranavs School</p>
              <p className="subtitle is-4">Higher Secondary Education</p>
              <p className="subtitle">Grade: 84.25/100</p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">2004-2014</p>
              <p className="title">Hirendra Leela Patranavs School</p>
              <p className="subtitle is-4">Secondary Education</p>
              <p className="subtitle">Grade: 82.5/100</p>
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
