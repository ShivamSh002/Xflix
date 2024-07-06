import React, { useEffect, useState } from 'react'
import "./Section.css"
import moment from "moment"

const Section = ({videos}) => {
   const uploadDate = (date)=>{
     return moment(date, "YYYYMMDD").fromNow();
   }

    return (
        <div className='videoWrapper'>{videos.map((data)=><div className='cardWrapper'><a href={data.videoLink}><div><img src={data.previewImage} alt="" />
        <p className='title'> {data.title}

        <p> Genre:  {data.genre}</p>

        <p>Uploaded : {uploadDate(data.releaseDate)}</p>
         <p> Views : {data.viewCount}</p>
         <p> <span>UpVote : {data.votes.upVotes}</span> <span>DownVote : {data.votes.downVotes}</span></p>
        </p>

</div></a></div>)}</div>
    )
}

export default Section
