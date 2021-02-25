function handleInputChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

function handleSubmit(submitObj){
  submitObj.e.preventDefault()
  submitObj.callback(submitObj.currentState)
  this.setState({
    ...submitObj.clearState,
    submitted: true
  })
}

function findProject(id){
  return this.props.projects.find(project => project.id === parseInt(id, 10))
}

export { handleInputChange, handleSubmit, findProject }