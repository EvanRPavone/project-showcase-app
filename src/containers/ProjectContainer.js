import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { addProject, fetchProjects } from '../actions/projectActions'
import { authorizeUser, loginUser } from '../actions/userActions'
import { findProject } from '../utilities'
import ProjectForm from '../components/projects/ProjectForm'
import Projects from '../components/projects/Projects'
import Project from '../components/projects/Project'
import ModalWrapper from '../components/ModalWrapper'
import UserContainer from './UserContainer';

class ProjectContainer extends React.Component {
  componentDidMount(){
    if (!this.props.loadStatus){
      this.props.fetchProjects()
    }
    this.props.authorizeUser()
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}/new`} render={props =>{
            if (this.props.user.valid){
              return(
                <ModalWrapper title="Add Project" id="add-project-form" previousUrl={this.props.match.url}>
                  <ProjectForm 
                    addProject={this.props.addProject} 
                    projects={this.props.projects} 
                  />
                </ModalWrapper>
              )
            } else {
              return (
                <UserContainer previousUrl={`/projects`}/>
              )
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props =>
            <Project
              {...props} 
              project={findProject.call(this, props.match.params.id)} 
              loadStatus={this.props.loadStatus}
            />
          } />
          <Route path={`${this.props.match.path}`}>
            <Projects 
              projects={this.props.projects}
            />
          </Route> 
        </Switch>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  projects: state.projects.list,
  loadStatus: state.projects.loadStatus,
})

const mapDispatchToProps = {
  addProject, 
  fetchProjects, 
  loginUser, 
  authorizeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)