import React, {Component} from 'react';
import InputField from './util/InputField';
import {run, ruleRunner} from './validations/ruleRunner';
import { required, mustMatch, minLength } from './validations/rules';
import { signuptext } from './config/text';
import update from 'immutability-helper';
import { withRouter } from 'react-router-dom';

const fieldValidations = [
	ruleRunner("firstName", "First Name", required),
	ruleRunner("emailAddress", "Email Address", required),
	ruleRunner("password1", "Password", required, minLength(6)),
	ruleRunner("password2", "Password Confirmation", mustMatch("password1", "Password")),
];


class Signup extends Component{

	constructor(props){
		super(props);
		this.handleFieldChanged = this.handleFieldChanged.bind(this);
		this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
		this.errorFor = this.errorFor.bind(this);
		this.getGroupClassName = this.getGroupClassName.bind(this);
		this.handleOnFocus = this.handleOnFocus.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
		this.state = {
			showErrors: false,
			validationErrors: {},
			labelautomation: {},
			firstName: 'hello',
			lastName: 'ln',
			emailAddress: 'emailAddress@gmail.com',
			password1:'hello12',
			password2: 'hello12'
		}
	}

	componentWillMount(){
		this.setState({validationErrors: run(this.state, fieldValidations)});
	}

	errorFor(field){
		return this.state.validationErrors[field] || '';
	}

	handleFieldChanged(field){
		return(e) => {
			const newState = update(this.state, {
				[field]: {$set: e.target.value}
			});
			newState.validationErrors = run(newState, fieldValidations);
			this.setState(newState);
		};
	}
	getGroupClassName(field){
		return this.state.labelautomation[field]? 'focused': '';
	}

	handleOnFocus(id){
		if(!this.getGroupClassName(id)){
			const newState = update(this.state, {
					labelautomation:{
						[id]: {$set: true}
					}
				});
			this.setState(newState);
		}
	}

	handleOnBlur(id, text){
		if(text === ''){
			const newState = update(this.state, {
				labelautomation:{
					[id]: {$set: false}
				}
			});
			this.setState(newState);
		}
	}

	handleSubmitClicked(history){
		this.setState({showErrors: true});
		if(Object.keys(this.state.validationErrors).length !== 0) return null;
		history.push('/welcome');
	}

	render(){
		return(
			<div className="signup-container">
				<h2> Sign Up </h2>
				<p className="signup-subtext">{signuptext.para1}</p>
				<p className="signup-text">{signuptext.para2}</p>
				<p className="signup-text">{signuptext.para3}</p>
				<div className="signup-fields">
				<div className="btn linkedinbtn">
					<button className="linkedin" >Sign Up with LinkedIn</button>
					<i className="fa fa-linkedin" aria-hidden="true"></i>
				</div>

				<div className="signup-noaccount">
					<p className="signup-text">{signuptext.noaccount}</p>
					<p className="signup-text highlight-text">{signuptext.reg}</p>
				</div>
				
				<div className={`form-group ${this.getGroupClassName("firstName")}`}>
					<label className="lbl firstname" htmlFor="firstName">First Name</label>
					<InputField	showError={this.state.showErrors} type="text" id="firstName"
										text={this.state.firstName} onFieldChange={this.handleFieldChanged("firstName")}
										handleOnFocus={this.handleOnFocus} handleOnBlur={this.handleOnBlur}
										errorText={this.errorFor("firstName")} />
				</div>
				<div className={`form-group ${this.getGroupClassName("lastName")}`}>
					<label className="lbl lastname" htmlFor="lastName">Last Name</label>
					<InputField	showError={this.state.showErrors} type="text" id="lastName"
										text={this.state.lastName} onFieldChange={this.handleFieldChanged("lastName")}
										handleOnFocus={this.handleOnFocus} handleOnBlur={this.handleOnBlur}
										errorText={this.errorFor("lastName")} />
				</div>
				<div className={`form-group ${this.getGroupClassName("email")}`}>
					<label className="lbl email" htmlFor="email">Email Address</label>
					<InputField	showError={this.state.showErrors} type="email" id="email"
										text={this.state.emailAddress} onFieldChange={this.handleFieldChanged("emailAddress")}
										handleOnFocus={this.handleOnFocus} handleOnBlur={this.handleOnBlur}
										errorText={this.errorFor("emailAddress")} />
				</div>
				<div className={`form-group ${this.getGroupClassName("password1")}`}>
					<label className="lbl password1" htmlFor="password1">Password </label>
					<InputField	showError={this.state.showErrors} type="password" id="password1"
										text={this.state.password1} onFieldChange={this.handleFieldChanged("password1")}
										handleOnFocus={this.handleOnFocus} handleOnBlur={this.handleOnBlur}
										errorText={this.errorFor("password1")} />
				</div>
				<div className={`form-group ${this.getGroupClassName("password2")}`}>
					<label className="lbl password2" htmlFor="password2">Confirm Password</label>
					<InputField	showError={this.state.showErrors} type="password" id="password2"
										text={this.state.password2} onFieldChange={this.handleFieldChanged("password2")}
										handleOnFocus={this.handleOnFocus} handleOnBlur={this.handleOnBlur}
										errorText={this.errorFor("password2")} />
				</div>
				<button className="btn registerbtn" type="submit" 
				value="registeration" onClick={() => this.handleSubmitClicked(this.props.history)}>Register</button>
				</div>
				<div className="haveaccount">
					<p className="signup-text">{signuptext.haveaccount}</p>
					<a href="#" className="signup-text highlight-text">Sign In</a>
				</div>
			</div>
			);
	}
}

export default withRouter(Signup);