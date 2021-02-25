import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { authorizeUser } from '../actions/userActions';
import { addComment, fetchComments } from '../actions/commentActions';
import CommentForm from '../components/comments/CommentForm';
import Comments from '../components/comments/Comments';
import UserContainer from './UserContainer';

class CommentContainer extends React.Component{
    componentDidMount(){
        this.props.fetchComments(this.props.projectId)
        this.props.authorizeUser()
    }

    componentDidUpdate(prevProps){
        if (prevProps.projectLoadStatus !== this.props.projectLoadStatus){
            this.props.fetchComments(this.props.projectId)
        }
    }

    render(){
        return(
            <>
                <Route exact path={`${this.props.relativePath}/comments/new`} render={props => {
                    if (this.props.user.valid){
                        return (
                            <CommentForm
                                projectId={this.props.projectId}
                                user={this.props.user}
                                addComment={this.props.addComment}
                            />
                        )
                    } else {
                        return (
                            <UserContainer previousUrl={`/projects/${this.props.projectId}`}/>
                        )
                    }
                }}/>
                <Comments comments={this.props.comments} user={this.props.user}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    comments: state.comments.list,
    loadStatus: state.comments.loadStatus,
    projectLoaded: state.comments.projectLoaded,
    projectLoadStatus: state.projects.loadStatus,
    projects: state.projects.list
})

export default connect(mapStateToProps, { authorizeUser, addComment, fetchComments })(CommentContainer)