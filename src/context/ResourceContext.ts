import Resource from "constant/Constants"
import {makeAutoObservable} from "mobx"
import {BuildingResource, ManualClickableResource} from "interfaces"

export default class ResourceContext implements BuildingResource, ManualClickableResource {
	private _resource: Resource
	private _amount: number
	private _gainPerTick: number
	readonly manualRequiredClicks: number


	constructor(resource: Resource, amount: number, gainPerTick: number, manualRequiredClicks: number = 5) {
		this._resource = resource
		this._amount = amount
		this._gainPerTick = gainPerTick
		this.manualRequiredClicks = manualRequiredClicks
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
