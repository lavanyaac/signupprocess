import React from 'react';

function RadioButtonField({radioGrpName, value, id, selected,radioButtonOnSelect}){
	const checked = selected === id ? true: false;
	const labelClass = checked ? 'active': '';
  return (
  	<li className={labelClass} onClick={() => radioButtonOnSelect(id)}>
      <input type='radio' value={value} name={radioGrpName} id={id} checked={checked} />
      <label htmlFor={id}>{value}</label>
    </li>
  );
}

export default RadioButtonField;

 