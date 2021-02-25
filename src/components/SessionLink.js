
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SessionLink extends React.Component {
    render(){
        if (this.props.user.valid){
            return <NavLink className="secondary-text" to="/logout">Logout</NavLink>
        } else {
            return <NavLink className="secondary-text" to={{
                pathname: "/login",
                previousUrl: this.props.location.pathname
            }}>Login</NavLink>
        }
    }
}

export default connect(state => ({user: state.user}))(SessionLink)