
import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { isProjectInStockpile } from '../utilities'
import { fetchStockpiles, addStockpile, removeProjectFromStockpile } from '../actions/stockpileActions'
import { authorizeUser } from '../actions/userActions'
import Stockpiles from '../components/stockpiles/Stockpiles'
import Stockpile from '../components/stockpiles/Stockpile'
import StockpileAddForm from '../components/stockpiles/StockpileAddForm'
import ModalWrapper from '../components/ModalWrapper'
import UserContainer from './UserContainer'

class StockpileContainer extends React.Component{
  componentDidMount(){
    this.props.fetchStockpiles()
    this.props.authorizeUser()
  }

  findStockpile = id => {
    return this.props.stockpiles.find(stockpile => stockpile.id === parseInt(id,10))
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/new`} render={props => {
            if (this.props.user.valid){ 
              return(
                <>
                  <ModalWrapper title="Add Stockpile" id="stockpile-add-form" previousUrl="/stockpiles">
                    <StockpileAddForm
                      {...props}
                      addStockpile={this.props.addStockpile}
                      clearState={{name: ""}}
                    />
                  </ModalWrapper>
                  <Stockpiles 
                      stockpiles={this.props.stockpiles}
                      user={this.props.user}
                      match={{path: "stockpiles"}}
                  />
                </>
              ) 
            } else {
              return (
                <>
                  <UserContainer previousUrl={this.props.match.url}/>
                  <Stockpiles 
                      stockpiles={this.props.stockpiles}
                      user={this.props.user}
                      match={{path: "stockpiles"}}
                  />
                </>
              )
            }
          }}/>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Stockpile 
              {...props}
              stockpile={this.findStockpile(props.match.params.id)}
              loadStatus={this.props.loadStatus}
              removeProjectFromStockpile={this.props.removeProjectFromStockpile}
              isProjectInStockpile={projectId => isProjectInStockpile.call(this, projectId)}
            />          
          }/>
          <Route path={`${this.props.match.path}`} render={props => 
            <Stockpiles {...props} stockpiles={this.props.stockpiles} user={this.props.user}/>          
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  stockpiles: state.stockpiles.list,
  loadStatus: state.stockpiles.loadStatus
})

const mapDispatchToProps = { 
  fetchStockpiles,
  addStockpile, 
  removeProjectFromStockpile,
  authorizeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(StockpileContainer)