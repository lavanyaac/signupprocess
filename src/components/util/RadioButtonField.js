import React from 'react';

function RadioButtonField({radioGrpName, value, id, selected,radioButtonOnSelect}){
	const checked = selected === id ? true: false;
	const labelClass = checked ? 'active': '';
	console.log(selected, radioButtonOnSelect, checked)
  return (
  	<li className={labelClass}>
      <input type='radio' value={value} name={radioGrpName} id={id} checked={checked} onChange={() => radioButtonOnSelect(id)}/>
      <label htmlFor={id}>{value}</label>
    </li>
  );
}

export default RadioButtonField;

 