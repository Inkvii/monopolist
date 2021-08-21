import Resource, {MONEY, RESOURCE} from "constant/Constants"
import {Building, BuildingResource, ResourceContext} from "interfaces"
import {makeAutoObservable} from "mobx"
import {createContext} from "react"

export class PlayerStore {
	private _money: number = 0
	private _ownedResources: ResourceContext[] = []
	private _buildings: Building[] = []

	constructor() {
		this.generateDefaultInstance() //for testing purposes only
		makeAutoObservable(this)
	}

	incrementOwnedResourceAmount(resourceName: string) {
		console.info("incrementOwnedResourceAmount with name " + resourceName)
		this.ownedResources = this.ownedResources.map(value => {
			const amount = value.resource.name === resourceName ? value.amount + 1 : value.amount
			return {...value, amount: amount}
		})
	}

	recalculateResourceGains() {
		console.info("Recalculating resource gains")
		// for each building gather all revenue into a map of resources
		// this.buildings.
		const mappedResources = new Map<Resource, number>()
		this.buildings.flatMap((building) => building.produces)
			.filter((val) => val !== undefined)
			.flatMap(value => value as BuildingResource)
			.forEach((production) => {
				const value = mappedResources.get(production.resource) || 0
				mappedResources.set(production.resource, value + production.amount)
			})


		let copyOfResources: ResourceContext[] = [...this.ownedResources]

		mappedResources.forEach((value, key) => {
			const newResource: ResourceContext | undefined = copyOfResources.find((val, index) => val.resource === key)
			if (!newResource) {
				copyOfResources.push({
					resource: key,
					gainPerTick: value,
					amount: 0
				})
			} else {
				newResource.gainPerTick = value
			}
		})

		this.ownedResources = copyOfResources
	}


	private generateDefaultInstance() {
		this.money = 123
		this.ownedResources.push({
			resource: RESOURCE.wood,
			gainPerTick: 1.11,
			amount: 99
		})
		this.buildings.push({
			name: "Lumbermill",
			isActive: true,
			costToUpgrade: [{
				resource: RESOURCE.iron,
				amount: 120,
			}, {
				resource: RESOURCE.wood,
				amount: 50,
			}
			],
			image: "https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
			level: 1,
			produces: [
				{
					resource: RESOURCE.wood,
					amount: 2,
				}
			],
			maintenanceFee: [{
				resource: MONEY.gold,
				amount: 12
			}],
			revenue: [{
				resource: MONEY.gold,
				amount: 20
			}]
		})
		this.buildings.push({
			name: "Iron mine",
			isActive: true,
			costToUpgrade: [{
				resource: RESOURCE.iron,
				amount: 285,
			}, {
				resource: RESOURCE.wood,
				amount: 124,
			}
			],
			image: "https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
			level: 1,
			produces: [
				{
					resource: RESOURCE.iron,
					amount: 7,
				}
			],
			maintenanceFee: [{
				resource: MONEY.gold,
				amount: 12
			}],
			revenue: [{
				resource: MONEY.gold,
				amount: 20
			}]
		})
	}

	get buildings(): Building[] {
		return this._buildings
	}

	set buildings(value: Building[]) {
		this._buildings = value
	}

	get money(): number {
		return this._money
	}

	set money(value: number) {
		this._money = value
	}

	get ownedResources(): ResourceContext[] {
		return this._ownedResources
	}

	set ownedResources(value: ResourceContext[]) {
		this._ownedResources = value
	}
}

export const playerContext = createContext(new PlayerStore())

