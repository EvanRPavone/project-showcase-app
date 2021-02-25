import React from 'react'
import { Link } from 'react-router-dom'
import ProjectThumbnail from './ProjectThumbnail'

const Projects = props => {
  return (
    <>
      <Link to={`/projects/new`}>
        <h5 className="my-3">
          <span className="mx-2 primary-text badge">Add Project</span>
        </h5>
      </Link>
      <div className="card-columns">
        {props.projects.map(project => <ProjectThumbnail 
          key={project.id} 
          project={project}
          />
        )}
      </div>
    </>
  )
}

export default Projects