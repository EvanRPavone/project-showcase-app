import React from 'react'
import ProjectThumbnail from '../projects/ProjectThumbnail'

const Stockpile = props => {
  if (!props.loadStatus || props.loadStatus === "pending"){
    return(
      <div data-testid="stockpile-wrapper">Loading...</div>
    )
  } else if (!props.stockpile){
    return(
      <div data-testid="stockpile-wrapper">Project Not Found</div>
    )
  } else {
    return(
      <div data-testid="stockpile-wrapper">
        <h2 className="my-3">{props.stockpile.name}</h2>
        {props.stockpile.projects.map(project => 
          <div data-testid="project-wrapper" key={project.id} className="my-2">
            <ProjectThumbnail 
              project={project}
              inStockpile={props.isProjectInStockpile(project.id)}
              stockpile={props.stockpile}
              removeProjectFromStockpile={props.removeProjectFromStockpile}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Stockpile