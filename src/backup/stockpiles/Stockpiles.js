import React from 'react'
import { Link } from 'react-router-dom'

const Stockpiles = props => (
  <>
    <div className="row justify-content-center py-4">
    <h3>{props.user.valid ? `${props.user.current.username}'s Saved Projects` : "Your Saved Projects"}</h3>
    </div>
    <div className="row justify-content-center">
      <Link className="mx-4" to={{
        pathname: `${props.match.path}/new`,
        context: "stockpiles"
      }}>
        <h5>
          <span className="mx-2 primary-text badge">New Saved Project</span>
        </h5>
      </Link>
    </div>
    <div className="row justify-content-center">
      {props.stockpiles.map(stockpile => 
        <Link key={stockpile.id} to={`/stockpiles/${stockpile.id}`}>
          <div className="card mx-2">
            <div className="card-header">
              <h6 className="primary-text">{stockpile.name}</h6>
            </div>
          </div>
        </Link>
      )}
    </div>
  </>
)

export default Stockpiles