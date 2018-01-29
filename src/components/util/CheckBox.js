import React from 'react';

function CheckBox({label, checkboxOnSelect, checked,index, dataType}){
  return (
    <React.Fragment>
    <input type='checkbox' id={label+'-'+dataType} checked={checked} 
    onChange={() => checkboxOnSelect(label, index, dataType)}/>
    <label htmlFor={label+'-'+dataType}>{label}</label>
    </React.Fragment>
  );
}

export default CheckBox;