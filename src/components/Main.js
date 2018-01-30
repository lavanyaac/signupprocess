import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Welcome from './Welcome';
import Questionnarie from './Questionnarie';

class Main extends Component {
  render() {
    return (
    	<div className="main">
    	<Switch>
      	<Route exact path='/' component = {Signup} />
      	<Route path='/welcome' component = {Welcome} />
        <Route path='/Questionnarie' component = {Questionnarie} />
      </Switch>
      </div>
    );
  }
}

export default Main;