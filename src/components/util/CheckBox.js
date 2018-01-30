import React from 'react';

function CheckBox({label, checkboxOnSelect, checked, index, dataType}){
  return (
    <React.Fragment>
    <input type='checkbox' id={dataType+index+label.slice(0,5)} checked={checked}/>
    <label htmlFor={dataType+index+label.slice(0,5)} onClick={(e) => e.stopPropagation()}>{label} </label>
    </React.Fragment>
  );
}

export default CheckBox;