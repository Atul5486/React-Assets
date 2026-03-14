import React from 'react'

const Video = () => {
  return (
    <div>
      <video
       src="https://ik.imagekit.io/jl9byexwy/984b6aab-ed13-417f-a2bf-e74d4b9a80eb_FspSSpTeF"
        width='300'
        height='500'
        // autoPlay
        muted
        loop
        controls
       >

       <track kind='subtitles'
        src='/english.vtt'
        srcLang='en'
        label='English'
        default
       />
       <track kind='subtitles'
        src='/hindi.vtt'
        srcLang='hi'
        label='hindi'
       />
       </video>
    </div>
  )
}

export default Video
