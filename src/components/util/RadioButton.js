import React from 'react';
import RadioButtonField from './RadioButtonField'

function RadioButton({radioGrpName, radioBtnOptions, selected, radioButtonOnSelect}){
  return (
    <ul className={radioGrpName}>
       {
        radioBtnOptions.map((option, i) => <RadioButtonField 
        radioGrpName={radioGrpName} value={option.value} 
        id={option.id} key={option.id} selected={selected}
        radioButtonOnSelect={radioButtonOnSelect}/>)
      }  
    </ul>
  );
}

export default RadioButton;
