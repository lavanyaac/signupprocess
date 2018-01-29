import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
