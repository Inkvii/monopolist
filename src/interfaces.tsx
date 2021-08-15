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

export interface ResourceProducer {
	name: string,
	image: string,
	level: number,
	costToUpgrade: ResourceHolder[] // TODO refactor this, gain per tick should not be part of the interface
	maintenanceFee: number,
	revenue?: number,
	produces?: ResourceHolder[]
}
