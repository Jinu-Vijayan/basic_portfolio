import React from 'react'

function ProgressBar({prog}) {
  return (
    <li style={{
        width : "100%",
        height : "10px",
        backgroundColor : "black",
        borderRadius : "0.625rem",
        marginBottom : "0.625rem",
        marginTop : "0.3rem"
      }}>
        <div style={{
          width : prog,
          height : "100%",
          backgroundColor : "#ffc400",
          borderRadius : "0.625rem"
        }}></div>
      </li>
  )
}

export default ProgressBar