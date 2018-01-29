import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Welcome from './Welcome';
// import Questions1 from './Questions1';
// import Questions2 from './Questions2';
import Questionnarie from './Questionnarie';
import Completed from './Completed';

class Main extends Component {
  render() {
    return (
    	<div className="main">
    	<Switch>
      	<Route exact path='/' component = {Signup} />
      	<Route path='/welcome' component = {Welcome} />
        <Route path='/Questionnarie' component = {Questionnarie} />
        <Route path='/completed' component = {Completed} />
      </Switch>
      </div>
    );
  }
}

export default Main;