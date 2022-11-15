import React from 'react'

function BoxColor({r, g, b}) {
    const divStyle = {
        background: `rgb(${r},${g},${b})`,
      };

  return (
    <div>
        <div style={divStyle}>
            BoxColor
        </div>
    
    </div>
  )
}

export default BoxColor