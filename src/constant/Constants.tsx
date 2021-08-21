import Building from "context/Building"
import iron from "../assets/icons/iron.PNG"
import gold from "../assets/icons/gold.PNG"
import silver from "../assets/icons/silver.PNG"
import wood from "../assets/icons/wood.PNG"

export default class Resource {
	name: string
	icon: any

	constructor(name: string, icon: any) {
		this.name = name
		this.icon = icon
	}
}

export const RESOURCE = {
	iron: new Resource("Iron ore", iron),
	wood: new Resource("Wood", wood),
}

export const MONEY = {
	gold: new Resource("Gold", gold),
	silver: new Resource("Silver", silver),
}

export const ALL_RESOURCES = {...RESOURCE, ...MONEY}

export const BUILDINGS = {
	lumbermill: new Building(
		"Lumbermill",
		"https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
		[{
			resource: RESOURCE.iron,
			amount: 120,
		}, {
			resource: RESOURCE.wood,
			amount: 50,
		}],
		[{
			resource: MONEY.gold,
			amount: 3
		}],
		[{
			resource: MONEY.gold,
			amount: 5
		}, {
			resource: RESOURCE.wood,
			amount: 2
		}],
	),
	ironMine: new Building(
		"Iron mine",
		"https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
		[{
			resource: RESOURCE.iron,
			amount: 75,
		}, {
			resource: RESOURCE.wood,
			amount: 150,
		}],
		[{
			resource: MONEY.gold,
			amount: 2
		}, {
			resource: RESOURCE.wood,
			amount: 1
		}],
		[{
			resource: RESOURCE.iron,
			amount: 2
		}],
	),
}
