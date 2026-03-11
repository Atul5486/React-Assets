import React from 'react'

const Pill = ({image,text,onclick}) => {
  return (
    <div className='user-pill' onClick={onclick}>
        <img src={image} alt={text} />
        <span>{text} &times;</span>
    </div>
  )
}

export default Pill