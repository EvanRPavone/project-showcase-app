import React from 'react';
import { connect } from 'react-redux';
import { isProjectInStockpile, findProject } from '../utilities';
import Projects from './projects/Projects';
import Project from './projects/Project';

class StockpileContext extends React.Component {
  render(){
    switch(this.props.context){
      case "projects":
        return <Projects 
                projects={this.props.projects} 
                isProjectInStockpile={projectId => isProjectInStockpile.call(this, projectId)}
              />
      case "project":
        return  <Project
                  match={{url: `/projects/${this.props.projectId}`}}
                  project={findProject.call(this, this.props.projectId)} 
                  loadStatus={this.props.loadStatus}
                  isProjectInStockpile={projectId => isProjectInStockpile.call(this, projectId)}
                />
      default:
        return <></>
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  stockpiles: state.stockpiles.list,
  projects: state.projects.list,
  loadStatus: state.projects.loadStatus
})

export default connect(mapStateToProps)(StockpileContext)