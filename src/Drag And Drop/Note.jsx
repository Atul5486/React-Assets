import React from 'react'

const Note = ({content,initialPos,...props}) => {
  return (
    <div style={{
        position:"absolute",
        left:`${initialPos?.x}px`,
        right:`${initialPos?.y}px`,
        border:"1px solid black",
        userSelect:"none",
        padding:"10px",
        width:"200px",
        cursor:"move",
        backgroundColor:"lightyellow",
        color:"black"
    }}{...props}>📌{content}</div>
  )
}

export default Note