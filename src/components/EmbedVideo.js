import React from 'react';

const EmbedVideo = ({ videoUrl, title }) => {
    let embedUrl = "https://www.youtube.com/embed/"
    if (!!videoUrl.match(/youtube/)){
        const vIdx = videoUrl.indexOf("v=")
        embedUrl = embedUrl.concat(videoUrl.slice(vIdx + 2))
    } else if (!!videoUrl.match(/youtu.be/)) {
        const vIdx = videoUrl.indexOf(".be/")
        embedUrl = embedUrl.concat(videoUrl.slice(vIdx + 4))
    } else {
        return <></>
    }
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" title={title} width="560" height="315" src={`${embedUrl}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default EmbedVideo