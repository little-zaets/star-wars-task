import React, { useState } from 'react';
import {isContains} from '../../utils';
import Chart from './Chart';
import './BarChart.scss';

const BarChart = ({ vehicleData }) => {
	const [homeWorlds, setHomeWorlds] = useState();

	const getHomeWorldData = (vehicleData) => {
		let homeWorldData = [];
		vehicleData.map(item => {
				item.homeWorlds.filter((homeworld) => {
					if (!isContains(homeWorldData, homeworld)) {
						homeWorldData.push(homeworld)
					}
				})
				
			setHomeWorlds(homeWorldData);
		})
		return homeWorldData;
	}

	if (!homeWorlds) {
		getHomeWorldData(vehicleData);
	}
	
	return (
		<div className="chart-wrapper">
			<Chart homeWorlds={homeWorlds} />
		</div>
	);
}

export default BarChart;