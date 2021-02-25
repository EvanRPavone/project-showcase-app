import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ProjectContainer from './containers/ProjectContainer';
import NavBar from './components/NavBar'
import UserContainer from './containers/UserContainer'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/logout" render={props => <UserContainer {...props}/>}/>
          <Route path="/login" render={props => <UserContainer {...props} previousUrl={props.location.previousUrl}/>} />
          <Route path="/signup" render={props => <UserContainer {...props} />} />
          <Route path="/projects" render={props => <ProjectContainer {...props}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;