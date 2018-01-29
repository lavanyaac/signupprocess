import React from 'react';

function ProgressBar({total, completed}){
	const completedPer = Math.floor((completed/total) * 100);
	const styles = {width: completedPer+'%'};
	const display = completed +'/'+total;
  return (
  	<div className="progressbar">
	    <div className="outerbar">
	    	<div className="innerbar" style={styles}></div>
	    </div>
	    <span>{display}</span>
	  </div>
  );
}

export default ProgressBar;