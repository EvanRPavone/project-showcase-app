
import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import UserFormFields from './UserFormFields'

class UserLogin extends React.Component {
    state = {
        username: "",
        password: "",
        submitted: false
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            name: "",
            selectId: null,
            submitted: true
        })
    }

    render(){
        if (this.state.submitted && this.props.url === "/login"){
            return <Redirect to="/"/>
        } else if (this.props.mode === "Login"){
            return(
            <>
                <form data-testid="login-form" onSubmit={this.handleLoginSubmit}>
                <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
                <input className="btn btn-primary tertiary-background" type="submit" value="Login" data-dismiss="modal" aria-label="Close"/><br/>
                <br/>
                <span>Not a user? <button className="link btn btn-link" onClick={this.props.switchMode}>Signup</button></span>
                </form>
            </>
            )
        } else if (this.props.mode === "Signup"){
            return(
            <form onSubmit={e => handleSubmit.call(this, {
                e, 
                callback: this.props.createUser,
                currentState: this.state,
                clearState: {username: "", password: ""}
            })}>
                <UserFormFields inheritedState={this.state} handleInputChange={e => handleInputChange.call(this, e)}/>
                <input className="btn btn-primary tertiary-background" type="submit" value="Signup"/><br/>
                <br/>
                <span>Already a user? <button className="link btn btn-link" onClick={this.props.switchMode}>Login</button></span>
            </form>
            )
        }
    
    }
}

export default UserLogin