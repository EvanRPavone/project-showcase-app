let BASE_URL = 'http://localhost:3000/projects'

function addComment(comment){
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(comment)
    }

    return dispatch => {
        dispatch({type: "ADD_COMMENT", comment})
        fetch(`${BASE_URL}/${comment.projectId}/comments`, configObj)
    }
}

function fetchComments(projectId){
    return dispatch => {
        dispatch({ type: "LOAD_COMMENTS", projectId })
        fetch(BASE_URL + `/${projectId}/comments`)
        .then(resp => resp.json())
        .then(comments => dispatch({ type: "ADD_COMMENTS", comments }))
    }
}

export { addComment, fetchComments }