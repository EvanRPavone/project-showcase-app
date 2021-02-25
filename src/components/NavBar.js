import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SessionLink from './SessionLink'

const NavBar = () => {
    const location = useLocation()
    return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light justify-content-between secondary-background">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nav-menu">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="secondary-text" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="secondary-text" to="/projects">Projects</NavLink>
                </li>
                </ul>
            </div>
            <div>
                <SessionLink location={location} />
            </div>
        </nav>
    )

}

export default NavBar