import React from 'react';

function RangeSlider({min, max}){
  return (
  	<div className="slider-container">
	    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
	  </div>
  );
}

export default RangeSlider;