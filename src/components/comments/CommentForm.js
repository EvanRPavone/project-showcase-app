import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { handleInputChange, handleSubmit } from '../../utilities';
import '../../stylesheets/comments.css';

class CommentForm extends React.Component{
    state = {
        text: "",
        submitted: false
    }

    render(){
        if (this.state.submitted){
            return <Redirect to={`/projects/${this.props.projectId}`}/>
        } else {
            return (
                <div className="modal" id="comment-form" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Comment</h5>
                                <Link to={`/projects/${this.props.projectId}`} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </Link>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={e => handleSubmit.call(this, {
                                    e,
                                    callback: this.props.addComment,
                                    currentState: {
                                        ...this.state,
                                        userId: this.props.user.current.id,
                                        projectId: this.props.projectId,
                                        user: this.props.user
                                    },
                                    clearState: { text: ""}
                                })}>
                                    <div className="form-group">
                                        <textarea className="form-control" name="text" value={this.state.text} placeholder="Write your comment here..." onChange={e => handleInputChange.call(this, e)} />
                                    </div>
                                    <input className="btn btn-primary tertiary-background" type="submit" value="Add Comment"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default CommentForm