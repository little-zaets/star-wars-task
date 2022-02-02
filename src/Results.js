import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { getVehiclesWithPilots, getHomeworldPopulation } from './resultsHelper';
import Banner from './Banner';
import BarChart from './BarChart';
import './Results.scss';

const Results = () => {
	const [vehicles, setVehicles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const vehiclesWithPilots = await getVehiclesWithPilots();
				const vehicleData = await getHomeworldPopulation(vehiclesWithPilots);

				setVehicles(vehicleData);
				setIsLoading(false);
			} catch (error) {
				console.log("error", error)
			}
		}
		fetchData();
	}, [])

	return (
		<div className="results">
			{isLoading ?
				<FontAwesomeIcon icon={faCog} className="icon-cog" spin /> : (
					<>
						{vehicles && <Banner vehicleData={vehicles} />}

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

						{vehicles && <BarChart vehicleData={vehicles} />}
					</>
				)}
		</div>
	)
}

export default Results;