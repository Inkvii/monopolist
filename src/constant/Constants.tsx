import Building from "context/Building"

export default class Resource {
	name: string
	icon: string

	constructor(name: string, icon: string) {
		this.name = name
		this.icon = icon
	}
}

export const RESOURCE = {
	iron: new Resource("Iron ore", "resources/iron.PNG"),
	wood: new Resource("Wood", "resources/wood.PNG"),
}

export const MONEY = {
	gold: new Resource("Gold", "resources/gold.PNG"),
	silver: new Resource("Silver", "resources/silver.PNG"),
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
