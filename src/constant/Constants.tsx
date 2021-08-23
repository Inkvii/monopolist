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

	constructor(name: string, icon: any) {
		this.name = name
		this.icon = icon
	}
}

export const RESOURCE = {
	ironOre: new Resource("Iron ore", iron),
	ironIngot: new Resource("Iron ingot", ironIngot),
	wood: new Resource("Wood", wood),
	woodenPlank: new Resource("Wooden plank", woodenPlank),
	stone: new Resource("Stone", stone)
}

export const MONEY = {
	gold: new Resource("Gold", gold),
	silver: new Resource("Silver", silver),
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
