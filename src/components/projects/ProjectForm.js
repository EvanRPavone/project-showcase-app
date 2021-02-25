import React from 'react';
import { Redirect } from 'react-router-dom';
import { handleSubmit } from '../../utilities';
import '../../stylesheets/projects.css';

class ProjectForm extends React.Component {
    static cleanState = {
        title: "",
        language: "",
        githubUrl: "",
        videoUrl: "",
        description: "",
        submitted: false
    }

    state = {
        ...this.constructor.cleanState
    }

    handleInputChange = e => {
        let value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    render(){
        if (this.state.submitted){
            return <Redirect to="/projects"/>
        } else {
            return(
                <div>
                    <form onSubmit={e => handleSubmit.call(this, {
                        e,
                        callback: this.props.addProject,
                        currentState: this.state,
                        clearState: {...this.constructor.cleanState}
                    })}>
                        <div className="form-group">
                            <label>Title: </label>
                            <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Name of Project..."/>
                        </div>
                        <div className="form-group">
                            <label>Language: </label>
                            <input className="form-control" type="text" name="language" value={this.state.language} onChange={this.handleInputChange} placeholder="What coding Language?"/>
                        </div>
                        <div className="form-group">
                            <label>Github Link: </label>
                            <input className="form-control" type="text" name="githubUrl" value={this.state.githubUrl} onChange={this.handleInputChange} placeholder="Github URL or App Link"/>
                        </div>
                        <div className="form-group">
                            <label>Video Link: </label>
                            <input className="form-control" type="text" name="videoUrl" value={this.state.videoUrl} onChange={this.handleInputChange} placeholder="Video Demo URL - ex: https://youtu.be/H1ueFQ45Apw" />
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <textarea className="form-control" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="What does this project do?"/>
                        </div>
                        <input className="btn btn-primary tertiary-background" type="submit" value="Showcase Project"/>
                    </form>
                </div>
            )
        }
    }
}

export default ProjectForm