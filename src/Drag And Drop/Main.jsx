import React, { useState } from 'react'
import './style.css'
import Notes from './Notes'
const Main = () => {
  const [notes, setNotes] = useState([
    {
      id:1,
      text:"Hello how are you"
    },
    {
      id:2,
      text:"Hello i am fine what about you"
    },
  ])
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default Main