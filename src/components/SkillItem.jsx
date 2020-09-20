import React from "react"

const SkillItem = ({ skill, rating }) => {
  return (
    <>
      <p className="is-size-4">{skill}</p>
      <progress className="progress is-info" value={rating} max="100">
        {`${rating}%`}
      </progress>
    </>
  )
}

export default SkillItem
