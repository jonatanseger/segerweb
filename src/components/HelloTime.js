import React from "react"

function HelloTime() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "Good morning"

  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good afternoon"

  } else {
    timeOfDay = "Good night"
  }

  return (
      <div>{timeOfDay}</div>
  )
}

export default HelloTime
