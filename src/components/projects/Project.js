import React from 'react'
import { Link } from 'react-router-dom'
import EmbedVideo from '../EmbedVideo'
import CommentContainer from '../../containers/CommentContainer'

const Project = props => {
  if (!props.loadStatus || props.loadStatus === "pending"){
    return(
      <div>Loading...</div>
    )
  } else if (!props.project){
    return(
      <div>Project Not Found</div>
    )
  } else {
    return(
      <>
        <div className="row justify-content-center">
          <div className="card my-3 project-wrapper">
            <div className="card-header">
              <div className="row justify-content-between">
                <div>
                  <span className="badge badge-primary badge-pill">{props.project.language}</span> 
                </div>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">{props.project.title}</h4>
              <p>{props.project.description}</p>
              <div className ="text-center">
                <button className="btn btn-success tertiary-background"><a href={props.project.githubUrl} className="githubButton" rel="noreferrer" target="_blank">Project Link</a></button>
                <br/>
                <br/>
                <p>Github Push?</p>
                <EmbedVideo videoUrl={props.project.videoUrl} title={props.project.title}/>
              </div>
              <br/>
              <Link className="btn btn-primary tertiary-background" to={`${props.match.url}/comments/new`}>Comment</Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <CommentContainer 
            relativePath={props.match.path} 
            projectId={props.project.id}
          />
        </div>
      </>
    )
  }
}

export default Project