import Resource, {MONEY, RESOURCE} from "constant/Constants"
import {Building, BuildingResource} from "interfaces"
import {makeAutoObservable} from "mobx"
import {createContext} from "react"
import {Counter, CounterHolder} from "context/Counter"
import ResourceContext from "context/ResourceContext"

export class PlayerStore {
	private _money: ResourceContext[] = []
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
				copyOfResources.push(new ResourceContext(key, 0, value))
			} else {
				newResource.gainPerTick = value
			}
		})

		this.ownedResources = copyOfResources
	}

	recalculateMoneyGains() {
		const mappedRevenue = new Map<Resource, number>()
		this.buildings.flatMap((building) => building.revenue)
			.filter((val) => val !== undefined)
			.flatMap(value => value as BuildingResource)
			.forEach((revenue) => {
				const value = mappedRevenue.get(revenue.resource) || 0
				mappedRevenue.set(revenue.resource, value + revenue.amount)
			})

		const mappedFee = new Map<Resource, number>()
		this.buildings.flatMap((building) => building.maintenanceFee)
			.forEach((fee) => {
				const value = mappedFee.get(fee.resource) || 0
				mappedFee.set(fee.resource, value + fee.amount)
			})


		let copyOfMoneys: ResourceContext[] = [...this.money]

		Object.values(MONEY).forEach((moneyResource) => {
			const revenue = mappedRevenue.get(moneyResource) || 0
			const fee = mappedFee.get(moneyResource) || 0

			const result = revenue - fee
			const newResource: ResourceContext | undefined = copyOfMoneys.find((val) => val.resource === moneyResource)
			if (!newResource) {
				copyOfMoneys.push(new ResourceContext(moneyResource, 0, result))
			} else {
				newResource.gainPerTick = result
			}

		})
		this.money = copyOfMoneys
	}


	private generateDefaultInstance() {
		this.ownedResources.push(new ResourceContext(RESOURCE.wood, 99, 1.11))
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
				amount: 13
			}],
			revenue: [{
				resource: MONEY.gold,
				amount: 20
			}]
		})
		this.buildings.push({
			name: "Silver mine",
			isActive: true,
			costToUpgrade: [{
				resource: RESOURCE.iron,
				amount: 69,
			}, {
				resource: RESOURCE.wood,
				amount: 58,
			}
			],
			image: "https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
			level: 1,
			produces: [],
			maintenanceFee: [{
				resource: MONEY.gold,
				amount: 12
			}],
			revenue: [{
				resource: MONEY.silver,
				amount: 5
			}, {
				resource: MONEY.gold,
				amount: 1
			}
			]
		})
		this.money.push(new ResourceContext(MONEY.gold, 0, 0))
	}

	get buildings(): Building[] {
		return this._buildings
	}

	set buildings(value: Building[]) {
		this._buildings = value
	}


	get money(): ResourceContext[] {
		return this._money
	}

	set money(value: ResourceContext[]) {
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

