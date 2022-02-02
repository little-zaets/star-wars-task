import React from 'react';
import Bar from './Bar';

const Chart = ({ homeWorlds }) => {
	const populations = homeWorlds.map(({ population }) => population).scaleBetween(0, 400);

	const barWidth = 35;
	const barMargin = 45;
	const height = (populations.reduce((max, population) => (population > max ? population : max), -Infinity) * 1.2);
	const width = homeWorlds.length * (barWidth * 2);

	return (
		<svg
			viewBox={`0 10 ${width} ${height}`}
			width="100%"
			height={height}
			preserveAspectRatio="xMidYMax meet"
		>
		
			{homeWorlds && homeWorlds.map((data, index) => {
				const barHeight = populations.find(currPopulation => populations.indexOf(currPopulation) === index);
				return (
					<g className="bar" key={data.homeWorldName}>
						<Bar
							x={index * (barWidth + barMargin)}
							y={height - (barHeight + 10)}
							width={barWidth}
							height={height}
							homeWorldName={data.homeWorldName}
							population={data.population}
						/>
					</g>
				)
			})}
			
		</svg>
	)
}

export default Chart;

