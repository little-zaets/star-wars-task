import React, { useState } from 'react';
import './Banner.scss';

const Banner = (props) => {
	const { vehicleData } = props;
	const [bannerData, setBannerData] = useState();
	const [pilots, setPilots] = useState([]);

	const getBannerData = (vehicles) => {
		const largestPopulation = vehicles.reduce((max, vehicle) => vehicle.totalPopulation > max ? vehicle.totalPopulation : max, 0);
		const chosenVehicle = vehicles.find(vehicle => vehicle.totalPopulation === largestPopulation);

		if (chosenVehicle) {
			setBannerData(chosenVehicle)
			setPilots([...chosenVehicle.pilots])

			if (pilots.length !== 0) {
				const chosenHomeworlds = [];
				pilots.map(pilot => {
					chosenHomeworlds.push({
						homeWorldName: pilot.homeWorld.homeWorldName,
						population: pilot.homeWorld.population
					})
				})
			}
		}
		return chosenVehicle;
	}

	if (!bannerData) {
		getBannerData(vehicleData);
	}

	return (
		<div className="banner-wrapper">
			<header>
				<h2>Vehicle Name: {bannerData && bannerData.vehicleName}</h2>
				<h2>Homeworld Population Sum: {bannerData && bannerData.totalPopulation.toLocaleString()}</h2>
			</header>
			<div className="table-wrapper">
				<table style={{ width: "100%" }}>
					<tr>
						<th>Pilots</th>
						<th>Home Planets </th>
						<th>Population </th>
					</tr>

					{pilots && pilots.map(pilot =>
						<>
							<tr>
								<td>{pilot.pilotName} </td>
								<td>{pilot.homeWorld.homeWorldName}</td>
								<td>{pilot.homeWorld.population.toLocaleString()} </td>
							</tr>
						</>
					)}

				</table>
			</div>
		</div>
	)
}

export default Banner;