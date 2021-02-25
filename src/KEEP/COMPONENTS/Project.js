import React from 'react';
import { Link } from 'react-router-dom';
import EmbedVideo from '../EmbedVideo';
import '../../stylesheets/projects.css';
import CommentContainer from '../../containers/CommentContainer';

const Project = props => {
    if (!props.project){
        return(
            <div>Project doesn't exist</div>
        )
    } else {
        return(
            <>
            <div className="row-justify-content-center">
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
                        <div className="text-center">
                            <button className="btn btn-success tertiary-background"><a href={props.project.githubUrl} className="githubButton" rel="noreferrer" target="_blank">GitHub</a></button>
                            <br/>
                            <br/>
                            <EmbedVideo videoUrl={props.project.videoUrl} title={props.project.title}/>
                        </div>
                        <br/>
                        <Link className="btn btn-primary tertiary-background" to={`${props.match.url}/comments/new`}>Comment</Link>
                        <div className="row justify-content-center">
                            <CommentContainer
                                relativePath={props.match.path}
                                projectId={props.project.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Project