import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class Layout extends Component {
	constructor(props){
		super(props);
		this.homeHandler = this.homeHandler.bind(this);
	}

	homeHandler(){
    window.location.href='/';
  }

  render() {
    return (
      <div className="App">
        <Header homeHandler={this.homeHandler}/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
