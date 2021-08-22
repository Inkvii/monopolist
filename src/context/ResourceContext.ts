import Resource from "constant/Constants"
import {makeAutoObservable} from "mobx"
import {BuildingResource} from "interfaces"

export default class ResourceContext implements BuildingResource {
	private _resource: Resource
	private _amount: number
	private _gainPerTick: number


	constructor(resource: Resource, amount: number, gainPerTick: number) {
		this._resource = resource
		this._amount = amount
		this._gainPerTick = gainPerTick
		makeAutoObservable(this)
	}

	get resource(): Resource {
		return this._resource
	}

	set resource(value: Resource) {
		this._resource = value
	}

	get amount(): number {
		return this._amount
	}

	set amount(value: number) {
		this._amount = value
	}

	get gainPerTick(): number {
		return this._gainPerTick
	}

	set gainPerTick(value: number) {
		this._gainPerTick = value
	}
}
