import React from 'react'

const JobPosting = ({url,by,time,title,id}) => {
    const formattedTime=new Date(time*1000).toDateString()
  return (
     <div className="custom-post" role="listitem">
     <p className='id'>ID:{id}</p>
      <h2 className="custom-post__title">

        <a
          className={url ? "" : "inactiveLink"}
          href={url}
          target="_blank"
          rel="noopener" // security for opening new pages - Explain this indepth
        >
          {title}
        </a>
      </h2>
      <span className="custom-post__metadata">
        By {by} · {formattedTime}
      </span>
    </div>
  )
}

export default JobPosting