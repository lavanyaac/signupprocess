import React from 'react';

function RadioButtonField({radioGrpName, value, id, selected,radioButtonOnSelect}){
	const checked = selected === id ? true: false;
	console.log(selected, radioButtonOnSelect, checked)
  return (
  	<li>
      <input type='radio' value={value} name={radioGrpName} id={id} checked={checked} onChange={() => radioButtonOnSelect(id)}/>
      <label htmlFor={id}>{value}</label>
    </li>
  );
}

export default RadioButtonField;

 