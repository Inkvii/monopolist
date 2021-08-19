import {RESOURCE} from "constant/Constants"
import {ResourceContext} from "interfaces"
import {makeAutoObservable} from "mobx"
import {createContext} from "react"

export class PlayerStore {
	private _money: number = 0
	private _ownedResources: ResourceContext[] = []

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

	private generateDefaultInstance() {
		this.money = 123
		this.ownedResources.push({
			resource: RESOURCE.wood,
			gainPerTick: 1.11,
			amount: 99
		})
		this.ownedResources.push({
			resource: RESOURCE.iron,
			gainPerTick: 1.5,
			amount: 10
		})
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

