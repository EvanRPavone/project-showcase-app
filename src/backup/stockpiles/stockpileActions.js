import * as Cookies from "js-cookie"

let BASE_URL = 'http://localhost:3000/stockpiles';

const token = () => Cookies.get("theProjectSession")

function fetchStockpiles(){
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'omit'
  }
  return dispatch => {
    dispatch({type: 'LOAD_STOCKPILES'})
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(stockpiles => dispatch({
        type: "ADD_STOCKPILES",
        stockpiles
      }))
  }
}

function addProjectToStockpile(project, stockpileId, stockpileName){
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'omit',
    body: JSON.stringify({
      update: "add project",
      project_id: project.id,
      id: stockpileId
    })
  }
  return dispatch => {
    dispatch({type: "START_PROJECT_ADD", stockpileId, project})
    fetch(BASE_URL + `/${stockpileId}`, configObj)
      .then(resp => resp.json())
      .then(() => {
        dispatch({ type: "ADD_PROJECT_TO_STOCKPILE", project, stockpileId})
    })
  }
}

function removeProjectFromStockpile(projectId, stockpileId){
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'omit',
    body: JSON.stringify({
      update: "remove project",
      project_id: projectId,
      id: stockpileId
    })
  }
  return dispatch => {
    dispatch({
      type: "REMOVE_PROJECT_FROM_STOCKPILE",
      projectId,
      stockpileId
    })
    fetch(BASE_URL + `/${stockpileId}`, configObj)
  }
}

function addStockpile(stockpile){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    credentials: 'omit',
    body: JSON.stringify(stockpile)
  }

  return (dispatch) => {
    dispatch({type: "START_ADD", tempStockpile: stockpile})
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(respStockpile => dispatch({
        type: "ADD_STOCKPILE",
        respStockpile
      }))
  }
}

export { fetchStockpiles, addProjectToStockpile, addStockpile, removeProjectFromStockpile }