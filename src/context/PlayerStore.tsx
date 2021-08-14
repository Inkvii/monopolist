import {RESOURCE} from "constant/Constants"
import {ResourceHolder} from "interfaces"
import {makeAutoObservable} from "mobx"
import {createContext} from "react"

class PlayerStore {
	money: number = 0
	ownedResources: ResourceHolder[] = []

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
			gainPerTick: 66,
			amount: 997
		})
	}
}

export default createContext(new PlayerStore())
