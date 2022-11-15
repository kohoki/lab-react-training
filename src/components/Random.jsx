import React from 'react'

function Random({min, max}) {
    const result = Math.round(Math.random() * (max - min) + min);
  return (
    <div>
        <p>Random value between {min} and {max} ={'>'} {result}</p>
    </div>
  )
}

export default Random