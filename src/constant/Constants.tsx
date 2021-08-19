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
}
