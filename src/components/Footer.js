import React, { Component } from 'react';
import {footertext} from './config/text';

class Footer extends Component {
  render() {
    return (
      <footer>
      	<div className="footer-links">
      		<i className="fa fa-facebook-square" aria-hidden="true"></i>
      		<i className="fa fa-linkedin-square" aria-hidden="true"></i>
      		<i className="fa fa-twitter-square" aria-hidden="true"></i>
      		<i className="fa fa-medium" aria-hidden="true"></i>
      	</div>
      	<div className="footer-copyright">
      		<p>{footertext.copyright}</p>
      	</div>
      	<div className="footer-text">
        	<p>{footertext.para1}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;