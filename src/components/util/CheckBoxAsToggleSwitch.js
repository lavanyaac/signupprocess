import React from 'react';

function CheckBoxAsToggleSwitch({label, checkboxOnSelect, checked, index, dataType}){
  return (
    <label htmlFor={dataType+index} className="toggleswitch-container">
    <input type='checkbox' id={dataType+index} checked={checked} 
    onChange={() => checkboxOnSelect(label, index, dataType)}/>
    <span className="switch"></span>
    </label>
  );
}

export default CheckBoxAsToggleSwitch;