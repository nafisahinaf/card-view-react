import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props)=>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://img.youtube.com/vi/mQ055hHdxbE/2.jpg"/>
                <p className="time">{props.time}</p>
            </div>
        
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps={
    time:"00.00",
    title:"Modern loneliness",
    desc:"7000,000x ditonton- 1 hari yang lalu"
}

export default YouTubeComp;