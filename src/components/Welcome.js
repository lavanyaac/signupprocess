import React, { Component } from 'react';
import { welcometext } from './config/text';
import RadioButton from './util/RadioButton';
import update from 'immutability-helper';
import { withRouter } from 'react-router-dom';

class WelcomePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			investorTypes: [
			{value:'an Individual', id:'individual'}, 
			{value:'a non-institutional entity (e.g trusts & personal LLCs)', id:'non-institutional'}, 
			{value:'an institution (e.g. VCs, Corporate Funds, Family Offices)', id:'institution'}
			],
			selected:'individual',
			accreditedInvestor:[{value:'I am an accredited investor', id:'accreditedInvestor', checked:false}]
		}
		this.radioButtonOnSelect = this.radioButtonOnSelect.bind(this);
		this.surveyClick = this.surveyClick.bind(this);
		this.accreditedInvestorOnSelect = this.accreditedInvestorOnSelect.bind(this);
	}

	radioButtonOnSelect(selectedId){
		console.log('radio on click', selectedId)
		this.setState({selected: selectedId});
	}

	accreditedInvestorOnSelect(){
		const index = 0;
		const newState = update(this.state, {
				accreditedInvestor: { [index]:{
					checked: {$set: true}
				}
			}
		});
		this.setState(newState);
	}

	surveyClick(history){
		history.push('/questions1');
	}
  render() {
  	const isAccSelected = this.state.accreditedInvestor[0].checked ? this.state.accreditedInvestor[0].id: '';
  	const {investorTypes, accreditedInvestor, selected } = this.state;
    return (
      <div className="welcome-container">
      	<h2>Welcome to Propel(x)</h2>
      	<p>{welcometext.welcomemessage}</p>
      	<div className="investor-consent">
	      	<div className="investor-types-container">
	      		<p>I am investing as:</p>
						<RadioButton radioGrpName={'investorTypes'} radioBtnOptions={investorTypes}
						radioButtonOnSelect={this.radioButtonOnSelect} selected={selected}/>
	      	</div>
	      	<div className="investor-consent-check">
	      		<RadioButton radioGrpName={'accreditedCheck'} radioBtnOptions={accreditedInvestor}
						radioButtonOnSelect={this.accreditedInvestorOnSelect} selected={isAccSelected}/>
						<p>{welcometext.disclaimer}</p>
	      	</div>
	      	<button className="btn survey" 
	      	onClick={() => this.surveyClick(this.props.history)}>Investment Objectives Survey</button>
	      </div>
	      </div>
    );
  }
}

export default withRouter(WelcomePage);
