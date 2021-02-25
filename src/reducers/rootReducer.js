import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import projectsReducer from './projectsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    comments: commentsReducer,
    user: usersReducer
})

export default rootReducer