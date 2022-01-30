import React, { useState } from 'react';
import Chart from './Chart';
import Bar from './Bar';;

const BarChart = ({ vehicleData }) => {
	const [homeWorlds, setHomeWorlds] = useState();

	const removeDuplicates = (data) => {
		const homeworld = [...new Set(data)];
		return homeworld;
	}

	const getHomeWorldData = (vehicleData) => {
		const homeWorldData = [];
		vehicleData.map(item => {
			console.log(item)
			item.homeWorlds.forEach((homeWorld) => {
				homeWorldData.push(homeWorld);
			})
			
			setHomeWorlds(removeDuplicates(homeWorldData));
		})
		return homeWorldData;
	}

	const maxPopulation = vehicleData.reduce((max, homeWorld) => homeWorld.population > max ? homeWorld.population : max, 0);
	const chartHeight = maxPopulation + 20;
	const barWidth = 50;
	const barMargin = 30;
	const numberofBars = vehicleData.length;
	let width = numberofBars * (barWidth + barMargin);

	if (!homeWorlds) {
		getHomeWorldData(vehicleData);
	}
	else {
		removeDuplicates(homeWorlds)
	}

	return (
		<>
			<p className="legend">
				<span className="population">Population</span>
			</p>

			<Chart height={chartHeight} width={width}>
				{homeWorlds && homeWorlds.map((data, index) => {
					console.log(data)
					const barHeight = data.population;
					return (
						<Bar
							key={data.homeWorldName}
							x={index * (barWidth + barMargin)}
							y={chartHeight - barHeight}
							width={barWidth}
							height={barHeight}
							homeWorldName={data.homeWorldName}
						/>
					);
				})}
			</Chart>
		</>
	);
}

export default BarChart;