import React from 'react';

const Bar = ({ x, y, width, height, homeWorldName, population }) => {
	return (
		<>
			<text x={x + 20} y={height + 5}>
				{`${homeWorldName}`}
			</text>
			
			<rect className="bar" x={x} y={y - 15} width={width} height={height - y}  />
			
			<text x={x + 20} y={y - 25}>
				{`${population.toLocaleString()}`}
			</text>
		</>
	);
}

export default Bar;