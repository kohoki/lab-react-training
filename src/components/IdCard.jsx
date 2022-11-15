import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    const date = birth
  return (
    <div class="mainDiv">
        <div><img
            src={picture}
            className="profile"
            alt="profile"
        /> 
    </div>
    <div>
        <h3>First name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height}</h3>
        <h3>Birth: {date.toDateString()}</h3>
    </div>
    </div>
  )
}

export default IdCard