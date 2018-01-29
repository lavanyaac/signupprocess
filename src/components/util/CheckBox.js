import React from 'react';

function CheckBox({label, checkboxOnSelect, checked, index, dataType}){
  return (
    <React.Fragment>
    <input type='checkbox' id={dataType+index} checked={checked} 
    onChange={() => checkboxOnSelect(label, index, dataType)}/>
    <label htmlFor={dataType+index}>{label}</label>
    </React.Fragment>
  );
}

export default CheckBox;