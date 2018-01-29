import React from 'react';

function CheckBox({label, checkboxOnSelect, checked,index, dataType}){
  return (
    <React.Fragment>
    <input type='checkbox' id={label} checked={checked} onChange={() => checkboxOnSelect(label, index, dataType)}/>
    <label htmlFor={label}>{label}</label>
    </React.Fragment>
  );
}

export default CheckBox;