import React from 'react';

function RangeSlider({label, min, max, value, rangeSliderOnChange}){
  return (
  	<div className="slidecontainer">
		  <input type="range" min={min} max={max} value={value} className="slider" id={label}
		  onChange={(e) => rangeSliderOnChange(label, e)}/>
		</div>
  );
}

export default RangeSlider;