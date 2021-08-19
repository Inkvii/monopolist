import Resource from "constant/Constants"

export interface ResourceContext {
	resource: Resource
	amount: number
	gainPerTick: number
}


export interface BuildingResource {
	resource: Resource
	amount: number
}

export interface Player {
	money: number
	ownedResources: ResourceContext[]
}

export interface Building {
	name: string,
	image: string,
	level: number,
	costToUpgrade: BuildingResource[]
	maintenanceFee: BuildingResource[],
	revenue?: BuildingResource[],
	produces?: BuildingResource[]
}
