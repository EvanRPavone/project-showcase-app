function stockpilesReducer(state = {list: [], loadStatus: null, stockpileAdded: null, projectAdded: null}, action){
  switch(action.type){
    case "START_ADD":
      const tempStockpile = { 
        ...action.tempStockpile,
        projects: [],
        temp: true }
      return {
        list: [...state.list, tempStockpile],
        loadStatus: state.loadStatus,
        stockpileAdded: null,
        projectAdded: state.projectAdded
      }
    
    case "START_PROJECT_ADD":
      return {
        list: state.list,
        loadStatus: state.loadStatus,
        stockpileAdded: state.stockpileAdded,
        projectAdded: null
      }

    case "ADD_STOCKPILE":
      const newStockpile = {
        ...action.respStockpile,
      }
      return {
        list: [...state.list.filter(stockpile => !stockpile.temp), newStockpile],
        loadStatus: state.loadStatus,
        stockpileAdded: action.respStockpile,
        projectAdded: state.projectAdded
      }
    case "LOAD_STOCKPILES":
      return {
        list: [...state.list],
        loadStatus: "pending",
        stockpileAdded: state.stockpileAdded,
        projectAdded: state.projectAdded
      }
    case "ADD_STOCKPILES":
      return {
        list: [...action.stockpiles],
        loadStatus: "complete",
        stockpileAdded: state.stockpileAdded,
        projectAdded: state.projectAdded
      }

    case "ADD_PROJECT_TO_STOCKPILE":
      const stockpile = state.list.find(stockpile => stockpile.id === action.stockpileId)
      const stockpileWithProject = {
        ...stockpile,
        projects: [...stockpile.projects, action.project]
      }
      return {
        list: [...state.list.filter(stockpile => stockpile.id !== action.stockpileId), stockpileWithProject],
        loadStatus: state.loadStatus,
        stockpileAdded: state.stockpileAdded,
        projectAdded: action.project
      }

    case "REMOVE_PROJECT_FROM_STOCKPILE":
        const currentStockpile = state.list.find(stockpile => stockpile.id === action.stockpileId)
        const updatedStockpile = {
          ...currentStockpile, 
          projects: currentStockpile.projects.filter(project => project.id !== action.projectId)
        }
      return {
        list: [...state.list.filter(stockpile => stockpile.id !== action.stockpileId), updatedStockpile],
        loadStatus: state.loadStatus,
        stockpileAdded: state.stockpileAdded,
        projectAdded: state.projectAdded
      }
    default: 
      return state 
  }
}

export default stockpilesReducer