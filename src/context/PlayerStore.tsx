import {MONEY, RESOURCE} from "constant/Constants"
import {makeAutoObservable} from "mobx"
import ResourceContext from "context/ResourceContext"
import Building from "context/Building"

export class PlayerStore {
	private _ownedResources: ResourceContext[] = []
	private _buildings: Building[] = []


	constructor() {
		this.generateDefaultInstance() //for testing purposes only
		makeAutoObservable(this)
	}


	private generateDefaultInstance() {
		this.ownedResources.push(new ResourceContext(RESOURCE.wood, 140, 0, 3))
		this.ownedResources.push(new ResourceContext(MONEY.gold, 1000, 0))
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
