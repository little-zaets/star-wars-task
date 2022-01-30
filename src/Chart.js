import React from 'react';

const Chart = ({ children, width, height }) => (
	<svg
	  viewBox={`0 0 ${width} ${height}`}   
	  width="100%"
	  height="70%"
	  preserveAspectRatio="xMidYMax meet"
	>
	  {children}
	</svg>
  );
  
  export default Chart;