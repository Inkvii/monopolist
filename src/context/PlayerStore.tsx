import Resource, {ALL_RESOURCES, BUILDINGS, MONEY, RESOURCE} from "constant/Constants"
import {makeAutoObservable} from "mobx"
import {createContext} from "react"
import {Counter, CounterHolder} from "context/Counter"
import ResourceContext from "context/ResourceContext"
import Building from "context/Building"

export class PlayerStore {
	private _ownedResources: ResourceContext[] = []
	private _buildings: Building[] = []
	private _counter: CounterHolder

	constructor() {
		this.generateDefaultInstance() //for testing purposes only
		this._counter = new CounterHolder([new Counter(0)])
		makeAutoObservable(this)
	}


	get counter(): CounterHolder {
		return this._counter
	}

	set counter(value: CounterHolder) {
		this._counter = value
	}

	incrementOwnedResourceAmount(resourceName: string) {
		console.info("incrementOwnedResourceAmount with name " + resourceName)
		const res = this.ownedResources.find(val => val.resource.name === resourceName)
		if (res !== undefined) res.amount += 1
	}

	recalculateResourcesGainPerTick() {
		const mappedProduction = new Map<Resource, number>()
		this.buildings.flatMap((building) => building.produces)
			.forEach((revenue) => {
				const value = mappedProduction.get(revenue.resource) || 0
				mappedProduction.set(revenue.resource, value + revenue.amount)
			})

		const mappedConsumption = new Map<Resource, number>()
		this.buildings.flatMap((building) => building.consumes)
			.forEach((consumption) => {
				const value = mappedConsumption.get(consumption.resource) || 0
				mappedConsumption.set(consumption.resource, value + consumption.amount)
			})


		let copyOfResources: ResourceContext[] = [...this.ownedResources]

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
		this.ownedResources = copyOfResources
	}


	private generateDefaultInstance() {
		this.ownedResources.push(new ResourceContext(RESOURCE.wood, 99, 1.11))
		this.buildings.push(BUILDINGS.lumbermill)
		this.buildings.push(BUILDINGS.ironMine)
		this.ownedResources.push(new ResourceContext(MONEY.gold, 0, 0))
	}

	get buildings(): Building[] {
		return this._buildings
	}

	set buildings(value: Building[]) {
		this._buildings = value
	}

	get ownedResources(): ResourceContext[] {
		return this._ownedResources
	}

	set ownedResources(value: ResourceContext[]) {
		this._ownedResources = value
	}
}

export const playerContext = createContext(new PlayerStore())

