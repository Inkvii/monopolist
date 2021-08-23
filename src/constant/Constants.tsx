import Building from "context/Building"
import iron from "../assets/icons/iron.PNG"
import gold from "../assets/icons/gold.PNG"
import silver from "../assets/icons/silver.PNG"
import wood from "../assets/icons/wood.PNG"
import ironIngot from "../assets/icons/ironIngot.PNG"
import woodenPlank from "../assets/icons/woodenPlank.PNG"
import stone from "../assets/icons/stone.PNG"
import forest from "../assets/icons/forest.PNG"

export default class Resource {
	name: string
	icon: any
	tier: number

	constructor(name: string, icon: any, tier: number) {
		this.name = name
		this.icon = icon
		this.tier = tier
	}
}

export const RESOURCE = {
	ironOre: new Resource("Iron ore", iron, 1),
	ironIngot: new Resource("Iron ingot", ironIngot, 2),
	wood: new Resource("Wood", wood, 1),
	woodenPlank: new Resource("Wooden plank", woodenPlank, 2),
	stone: new Resource("Stone", stone, 1)
}

export const MONEY = {
	gold: new Resource("Gold", gold, 1),
	silver: new Resource("Silver", silver, 2),
}

export const ALL_RESOURCES = {...RESOURCE, ...MONEY}

export const BUILDINGS = {
	forester: new Building(
		"Forester",
		forest,
		[
			{resource: RESOURCE.ironIngot, amount: 20},
			{resource: RESOURCE.wood, amount: 75}
		],
		[
			{resource: MONEY.gold, amount: 1}
		],
		[
			{resource: RESOURCE.wood, amount: 2}
		]
	),
	ironMine: new Building(
		"Iron mine",
		"https://www.playboombeach.com/wp-content/uploads/IronMine.png",
		[
			{resource: RESOURCE.ironOre, amount: 75,},
			{resource: RESOURCE.wood, amount: 150,}
		],
		[
			{resource: MONEY.gold, amount: 2},
		],
		[
			{resource: RESOURCE.ironOre, amount: 2}
		],
	),
	quarry: new Building(
		"Stone quarry",
		"https://i.pinimg.com/originals/32/7a/61/327a614d63c312dc5a03031a579f4ca1.jpg",
		[
			{resource: RESOURCE.ironIngot, amount: 35},
			{resource: RESOURCE.wood, amount: 60}
		],
		[
			{resource: MONEY.gold, amount: 3},
		],
		[
			{resource: RESOURCE.stone, amount: 5}
		],
	),
	lumbermill: new Building(
		"Lumbermill",
		"https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
		[
			{resource: RESOURCE.ironIngot, amount: 65},
			{resource: RESOURCE.woodenPlank, amount: 50}
		],
		[
			{resource: MONEY.gold, amount: 3},
			{resource: RESOURCE.wood, amount: 5},
		],
		[
			{resource: RESOURCE.woodenPlank, amount: 2}
		],
	),
	smelter: new Building(
		"Smelter",
		"https://static.wikia.nocookie.net/anno1404guide/images/4/4e/Iron_smelter_2.png",
		[
			{resource: RESOURCE.ironIngot, amount: 40,},
			{resource: RESOURCE.stone, amount: 110,}
		],
		[
			{resource: MONEY.gold, amount: 2},
			{resource: RESOURCE.wood, amount: 2},
			{resource: RESOURCE.ironOre, amount: 4}
		],
		[
			{resource: RESOURCE.ironIngot, amount: 1}
		]
	),

}
