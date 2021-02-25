import cuid from 'cuid'

function commentsReducer(state = { list: [], loadStatus: null, projectLoaded: null}, action){
    switch(action.type){
        case "ADD_COMMENT":
            const newComment = {
                ...action.comment,
                id: cuid()
            }
            return {
                list: [...state.list, newComment],
                loadStatus: state.loadStatus
            }
        case "LOAD_COMMENTS":
            return {
                list: [...state.list],
                loadStatus: "pending",
                projectLoaded: action.projectId
            }
        case "ADD_COMMENTS":
            return {
                list: [...action.comments],
                loadStatus: "complete",
                projectLoaded: state.projectLoaded
            }
        default: 
            return state 
    }
}

export default commentsReducer