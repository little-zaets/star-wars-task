import React, { useState, useEffect } from 'react';
import { getVehicleNames, getHomeworldPopulation, getBannerData } from './resultsHelper';
import Banner from './Banner';
import BarChart from './BarChart';
import './Results.scss';

const Results = () => {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {

				const vehiclesWithPilots = await getVehicleNames();
				const vehicleData = await getHomeworldPopulation(vehiclesWithPilots);

				setVehicles(vehicleData);

			} catch (error) {
				console.log("error", error)
			}
		}
		fetchData();
	}, [])

	return (
		<>
			{vehicles && <Banner vehicleData={vehicles} />}

			<div className="results">
				<div className="table-wrapper">
					<table>
						<tr>
							<th>#</th>
							<th>Vehicle</th>
							<th>Sum of Homeworld Populations</th>
						</tr>
						{vehicles !== null && vehicles.map((vehicle, i) =>
							<tr key={vehicle.vehicleName}>
								<td>{i + 1}</td>
								<td>{vehicle.vehicleName}</td>
								<td>{vehicle.totalPopulation.toLocaleString()}</td>
							</tr>
						)}
					</table>
				</div>
				{/* {vehicles && <BarChart vehicleData={vehicles} />} */}
			</div>
		</>
	)
}

export default Results;