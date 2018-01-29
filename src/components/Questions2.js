import React, { Component } from 'react';
import CheckBoxAsToggleSwitch from './util/CheckBoxAsToggleSwitch';
import { questions2text } from './config/text';
import update from 'immutability-helper';
import { withRouter } from 'react-router-dom'

class Questions2 extends Component {
  constructor(props){
		super(props);
		this.state = {
			agreements: [
				{name: questions2text['agreement1'], checked: false},
				{name: questions2text['agreement2'], checked: false},
				{name: questions2text['agreement3'], checked: false}
			]
		}
		this.checkboxOnSelect = this.checkboxOnSelect.bind(this);
	}

	checkboxOnSelect(label, index){
		const valueToBeUpdated = this.state.agreements[index]['checked'] === true? false: true;
		const newState = update(this.state, {
			agreements:{ 
				[index]:{
					checked: {$set: valueToBeUpdated}
				}
			}
		});
		this.setState(newState);
	}

	continueClick(history){
		history.push('/completed');
	}

  render() {
  	const { agreements } = this.state;
    return (
      <div className="agreements-container">

    		<ul>
    		{
    			agreements.map((agreement, i) => <li className='agreement-list'>
    				<CheckBoxAsToggleSwitch label={agreement.name} dataType={'agreement'} 
      			checkboxOnSelect={this.checkboxOnSelect} checked={agreement.checked} key={agreement+i} index={i}/>
      			<p>{agreement.name}</p>
      			</li>)
    		}
    		</ul>

      	<button className="btn finish" 
	      	onClick={() => this.continueClick(this.props.history)}>Finsh & Browse Deals</button>
      </div>
    );
  }
}

export default withRouter(Questions2);