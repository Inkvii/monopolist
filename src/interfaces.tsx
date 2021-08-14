import Resource from "constant/Constants"

export interface ResourceHolder {
	resource: Resource
	amount: number
	gainPerTick: number
}

export interface Player {
	money: number
	ownedResources: ResourceHolder[]
}
