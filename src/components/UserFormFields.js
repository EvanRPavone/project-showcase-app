import React from 'react'

const UserFormFields = ({ inheritedState, handleInputChange }) => {
    return(
        <>
            <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input className="form-control" type="text" name="username" value={inheritedState.username} onChange={handleInputChange}/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input className="form-control" type="password" name="password" value={inheritedState.password} onChange={handleInputChange}/>
            </div>
        </>
    )
}

export default UserFormFields