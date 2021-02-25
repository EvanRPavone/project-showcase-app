let BASE_URL = 'http://localhost:3000/projects'

function addProject(project){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(project)
  }

  return (dispatch) => {
    dispatch({
      type: "ADD_PROJECT",
      project
    })
    fetch(BASE_URL, configObj)
  }
}

function fetchProjects(language="all"){
  return (dispatch) => {
    dispatch({type: 'LOAD_PROJECTS'})
    fetch(BASE_URL + `/?q=${language}`)
      .then(resp => resp.json())
      .then(projects => dispatch({
        type: "ADD_PROJECTS",
        projects
      }))
  }
}

export { addProject, fetchProjects }