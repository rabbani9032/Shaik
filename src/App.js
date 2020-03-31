import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import UsersDetails from './components/UsersDetails';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
          <h1>SWIREPAY</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/usersDetails" component={UsersDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
