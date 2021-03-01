import React from 'react'
import { Link } from 'react-router-dom'
import ProjectThumbnail from './ProjectThumbnail'
import plusSign from '../../assets/add-icon.png'

const Projects = props => {
  return (
    <>
      <Link to={`/projects/new`}>
        <h5 className="row justify-content-center">
          <img className="my-3 icon" src={plusSign} alt="add project"></img>
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