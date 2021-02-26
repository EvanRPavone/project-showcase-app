import React from 'react'
import { Link } from 'react-router-dom'
import EmbedVideo from '../EmbedVideo'

const ProjectThumbnail = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <span className="badge badge-primary badge-pill">{props.project.language}</span>
            <span className="badge badge-success badge-pill"><a href={props.project.githubUrl} rel="noreferrer" target="_blank">Project Link</a></span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.project.title}</h4>
        <EmbedVideo videoUrl={props.project.videoUrl} title={props.project.title}/>
        <p>{props.project.description}</p>
        <Link className="btn btn-primary tertiary-background" to={`/projects/${props.project.id}`}>See More</Link>
      </div>
    </div>
  )
}

export default ProjectThumbnail