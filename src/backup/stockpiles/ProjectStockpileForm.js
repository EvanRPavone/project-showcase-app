
import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../../utilities'

class StockpileAddForm extends React.Component{
  state = {
    name: "",
    submitted: false
  }

  render(){
    if (this.state.submitted){
      return <Redirect to="/stockpiles" />
    } else {
      return(
        <>
          <form onSubmit={e => handleSubmit.call(this, {
            e,
            callback: this.props.addStockpile,
            currentState: {...this.state},
            clearState: {...this.props.clearState}
          })}>
            <div className="form-group">
              <label>Stockpile Name: </label>
              <input data-testid="add-stockpile-input" className="form-control" type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
            </div> 
            <input data-testid="add-stockpile-submit" className="btn btn-primary tertiary-background" type="submit" value="add"/>
          </form>
        </>
      )
    }
  }
}

export default StockpileAddForm