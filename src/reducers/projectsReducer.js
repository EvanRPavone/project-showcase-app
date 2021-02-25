import cuid from 'cuid';

function projectsReducer(state = {list: [], loadStatus: null}, action){
    switch(action.type){
        case "ADD_PROJECT":
            const newProject = {
                ...action.project,
                id: cuid(),
            }
            return {
                list: [...state.list, newProject],
                loadStatus: state.loadStatus
            }
        case "ADD_PROJECTS":
            return {
                list: [...state.list, ...action.projects],
                loadStatus: "complete"
            }
        case "LOAD_PROJECTS":
            return {
                list: [...state.list],
                loadStatus: "pending"
            }
        default:
            return state
    }
}

export default projectsReducer