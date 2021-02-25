import React from 'react';
import { connect } from 'react-redux'
import UserLogin from '../components/UserLogin';
import { createUser, loginUser, logoutUser } from '../actions/userActions';
import { Redirect } from 'react-router-dom';
import ModalWrapper from '../components/ModalWrapper';

class UserContainer extends React.Component {
    state = {
        mode: "Login"
    }

    switchMode = e => {
        e.preventDefault()
        if (this.state.mode === "Login"){
            this.setState({mode: "Signup"})
        } else if (this.state.mode === "Signup"){
            this.setState({mode: "Login"})
        }
    }

    render(){
        if (this.props.match && this.props.match.url === "/logout") {
            this.props.logoutUser()
            return <Redirect to="/"/>
        } else {
            return (
                <ModalWrapper title={this.state.mode} id="login-form" previousUrl={this.props.previousUrl}>
                    <UserLogin
                        loginUser={this.props.loginUser}
                        createUser={this.props.createUser}
                        user={this.props.user}
                        mode={this.state.mode}
                        switchMode={this.switchMode}
                        url={this.props.match ? this.props.match.url : null }
                    />
                </ModalWrapper>
            )
        }
    }
}

export default connect(state => ({user: state.user}), { createUser, loginUser, logoutUser})(UserContainer)