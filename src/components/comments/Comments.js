import React from 'react';
import '../../stylesheets/projects.css';

const Comments = props => (
    <div className="my-3 comments-wrapper">
        <h5>Comments: </h5>
        <ul className="list-group-flush px-0">
            {props.comments.map(comment => (
                <li key={comment.id} className="list-group-item pt-3">
                    <h6 className="card-subtitle text-muted">{comment.user.username ? comment.user.username : props.user.current.username}: </h6>
                    <span>{comment.text}</span>
                </li> 
            ))}
        </ul>
    </div>
)

export default Comments