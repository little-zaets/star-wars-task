import React from 'react';

const Bar = ({ x, y, width, height, homeWorldName }) => {

	return (
	<>
		<text x={x + width / 3} y={y - 5}>
			{`${homeWorldName}`}
		</text>
		<rect x={x} y={y} width={width} height={height} fill={`black`} aria-label={homeWorldName} />
		<text x={x + width / 3} y={y - 5}>
			{`${height}`}
		</text>
	</>
);
	}

export default Bar;