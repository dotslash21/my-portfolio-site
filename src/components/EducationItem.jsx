import React from "react"
import { FaGraduationCap } from "react-icons/fa"

const EducationItem = ({
  startYear,
  endYear,
  institution,
  degree,
  field,
  grade,
  maxGrade,
}) => {
  return (
    <div className="timeline-item is-primary">
      <div className="timeline-marker is-icon is-info has-text-white">
        <FaGraduationCap />
      </div>
      <div className="timeline-content">
        <p className="heading">
          {startYear}-{endYear}
        </p>
        <p className="title">{institution}</p>
        <p className="subtitle is-4">
          {degree}, {field}
          <br />
          Grade: {grade}/{maxGrade}
        </p>
      </div>
    </div>
  )
}

export default EducationItem
