
export function isContains(array, member) {
	return array.find(
		m => m.homeWorldName === member.homeWorldName && m.population === member.population);
}

Array.prototype.scaleBetween = function (scaledMin, scaledMax) {
	var max = Math.max.apply(Math, this);
	var min = Math.min.apply(Math, this);
	return this.map(num => (scaledMax - scaledMin) * (num - min) / (max - min) + scaledMin);
}