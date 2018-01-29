import React, { Component } from 'react';
import CheckBox from './util/CheckBox';
import { questions1text } from './config/text';
import update from 'immutability-helper';
import { withRouter } from 'react-router-dom'

class Questions1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			technologiesInterested: [
				{name: 'Aerospace & Transportation', checked: false},
				{name: 'Industrial Technologies', checked: false},
				{name: 'Energy & Green Technologies', checked: false},
				{name: 'Food & Agriculture', checked: false},
				{name: 'IT & Communications', checked: false},
				{name: 'Life Sciences', checked: false}
			],

			sectorsInterested: [
				{name: 'Food & Agriculture', checked: false},
				{name: 'Life Sciences: Medical Devices', checked: false},
				{name: 'Life Sciences: Medical Diagnostics', checked: false},
				{name: 'Life Sciences: Biopharma', checked: false},
				{name: 'Computing: Hardware', checked: false},
				{name: 'Energy', checked: false},
				{name: 'Computing: Software', checked: false},
				{name: 'Computing: Networks', checked: false},
				{name: 'Connected Devices', checked: false},
				{name: 'Chemicals', checked: false},
				{name: 'Space Exploration', checked: false}
			]
			
		}
		this.checkboxOnSelect = this.checkboxOnSelect.bind(this);
	}

	checkboxOnSelect(label, index, dataType){
		let stateProp;

		if(dataType === 'technology'){
			stateProp = 'technologiesInterested';
		}else if(dataType === 'sector'){
			stateProp = 'sectorsInterested';
		}
		const valueToBeUpdated = this.state[stateProp][index]['checked'] === true? false: true;
		const newState = update(this.state, {
			[stateProp]:{ 
				[index]:{
					checked: {$set: valueToBeUpdated}
				}
			}
		});
		this.setState(newState);
	}

  render() {
  	const { technologiesInterested, sectorsInterested} = this.state;
    return (
      <div className="questions1-container">
      	<h2>We have a few questions to personlize your experience.</h2>

      	<div className="technologies-interested">
      		<p className="question">{questions1text.question1}</p>
      		<ul>
      		{
      			technologiesInterested.map((technology, i) => <li><CheckBox label={technology.name} dataType={'technology'}
	      			checkboxOnSelect={this.checkboxOnSelect} checked={technology.checked} key={technology.name} index={i}/></li>)
      		}
      		</ul>
      	</div>
      	<div className="sectors-interested">
      		<p className="question">{questions1text.question2}</p>
      		<ul>
      		{
      			sectorsInterested.map((sector, i) => <li><CheckBox label={sector.name} dataType={'sector'}
      			checkboxOnSelect={this.checkboxOnSelect} checked={sector.checked} key={sector.name} index={i}/></li>)
      		}
      		</ul>
      	</div>

      	<div className="angel-investments">
      		<p className="question">{questions1text.question3}</p>
      	</div>
      </div>
    );
  }
}

export default withRouter(Questions1);