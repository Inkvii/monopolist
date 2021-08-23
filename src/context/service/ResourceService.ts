import {PlayerStore} from "context/PlayerStore"
import {makeAutoObservable} from "mobx"
import Resource, {ALL_RESOURCES} from "constant/Constants"
import ResourceContext from "context/ResourceContext"
import {hasEnoughOfResources} from "service/ResourceService"
import {BuildingResource} from "interfaces"

export default class ResourceService {
	private readonly playerStore: PlayerStore


	constructor(playerStore: PlayerStore) {
		this.playerStore = playerStore
		makeAutoObservable(this)
	}

	incrementOwnedResourceAmount(resourceName: string, amount: number = 100) {
		console.info("incrementOwnedResourceAmount with name " + resourceName)
		const res = this.playerStore.ownedResources.find(val => val.resource.name === resourceName)
		if (res !== undefined) res.amount += amount
	}

	recalculateResourcesGainPerTick() {
		const mappedProduction = new Map<Resource, number>()
		this.playerStore.buildings.filter(building => building.isActive).flatMap((building) => building.produces)
			.forEach((revenue) => {
				const value = mappedProduction.get(revenue.resource) || 0
				mappedProduction.set(revenue.resource, value + revenue.amount)
			})

		const mappedConsumption = new Map<Resource, number>()
		this.playerStore.buildings.filter(building => building.isActive).flatMap((building) => building.consumes)
			.forEach((consumption) => {
				const value = mappedConsumption.get(consumption.resource) || 0
				mappedConsumption.set(consumption.resource, value + consumption.amount)
			})


		let copyOfResources: ResourceContext[] = [...this.playerStore.ownedResources]

		Object.values(ALL_RESOURCES).forEach((resource) => {
			const production = mappedProduction.get(resource) || 0
			const consumption = mappedConsumption.get(resource) || 0

			const result = production - consumption
			const newResource: ResourceContext | undefined = copyOfResources.find((val) => val.resource === resource)
			if (!newResource) {
				copyOfResources.push(new ResourceContext(resource, 0, result))
			} else {
				newResource.gainPerTick = result
			}

		})
		this.playerStore.ownedResources = copyOfResources
	}

	minus(first: BuildingResource[] | ResourceContext[], second: BuildingResource[] | ResourceContext[]): BuildingResource[] | ResourceContext[] {
		if (!hasEnoughOfResources(first, second)) {
			throw new Error("Cannot calculate negative amount")
		}

		let result = [...first]

		for (const resource of second) {
			const resInStore: BuildingResource | ResourceContext | undefined = result.find(res => res.resource === resource.resource)
			if (!resInStore) {
				throw new Error(`Unexpected error - Could not find resource ${resource.resource.name} in first array`)
			}
			resInStore.amount -= resource.amount
		}

		return result
	}

	plus(first: ResourceContext[], second: ResourceContext[]): ResourceContext[] {
		let result = [...first]

		for (const resource of second) {
			const resInStore: ResourceContext | undefined = result.find(res => res.resource === resource.resource)
			if (!resInStore) {
				result.push(resource)
			} else {
				resInStore.amount += resource.amount
			}
		}
		return result
	}

}
