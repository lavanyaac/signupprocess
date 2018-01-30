import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Questions1 from './Questions1';
import Questions2 from './Questions2';


class Questionnarie extends Component {
  constructor(props){
    super(props);
    this.state = {
      progress:{completed:0, total:2}
    }
  }
  render() {
    const {total, completed} = this.state.progress; 
    return (
    	<div className="questionnarie">
    	<Switch>
      	<Route path='/questionnarie/questions1' component={() => <Questions1 totalquestions={total}/>} />
      	<Route path='/questionnarie/questions2' component={() => <Questions2 totalquestions={total}/>} />
      </Switch>
      </div>
    );
  }
}

export default Questionnarie;
