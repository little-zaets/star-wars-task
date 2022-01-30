
//get all vehiles with pilots
export const getVehicleNames = async () => {
	let url = 'https://swapi.py4e.com/api/vehicles/';
	const fetchedVehicles = [];
	try {
		do {
			let response = await fetch(url);
			if (response.status !== 200) {
				throw new Error('Something went wrong');
			}
			const data = await response.json();
			url = data.next;
			fetchedVehicles.push(...data.results.filter(result => result.pilots.length !== 0));
		} while (url);
	} catch (err) {
		console.log(err);
	}

	return fetchedVehicles;
}

const getPilot = async (pilotUrl) => {
	const data = await fetch(pilotUrl);
	if (data.status !== 200) {
		throw new Error('Something went wrong');
	}
	
	const pilotData = await data.json();
	const { name, homeworld } = pilotData;
	const pilot =
	{
		pilotName: name,
		homeWorld: await getHomeworld(homeworld)
	}
	return pilot;
}

const getHomeworld = async (pilotData) => {
	try {
		let response = await fetch(pilotData);
		if (response.status !== 200) {
			throw new Error('Something went wrong');
		}
		
		const homeWorldData = await response.json();
		const population = !isNaN(homeWorldData.population) && parseInt(homeWorldData.population, 10);
		const homeWorld = {
			homeWorldName: homeWorldData.name,
			population: population
		}
		return homeWorld;
	} catch (err) {
		console.log(err);
	}
}

export const getHomeworldPopulation = async (vehicleData) => {
	const vehicles = [];

	for (const item of vehicleData) {
		const pilots = await Promise.all(item.pilots.map(pilot =>
			getPilot(pilot)
		));
		
		const homeWorlds = await Promise.all(pilots.filter(pilot => pilot.homeWorld.population !== false).map(pilot => {
			return pilot.homeWorld;
		}));

		const total = pilots.reduce((accum, pilot) => accum + pilot.homeWorld.population, 0);

		const vehicle = {
			vehicleName: item.name,
			pilots: pilots,
			totalPopulation: total,
			homeWorlds: homeWorlds
		}
		vehicles.push(vehicle);
	}
	vehicles.sort((a, b) =>
		parseInt(b.totalPopulation) - parseInt(a.totalPopulation)
	);
	return vehicles.filter(vehicle => vehicle.totalPopulation !== 0);
}

