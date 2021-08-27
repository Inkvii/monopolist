import Resource, {ALL_RESOURCES} from "constant/Constants"
import {makeAutoObservable} from "mobx"


export default class TradingStore {
	private readonly _resourceTrade: Map<Resource, number[]>
	private _tickCounter: number

	constructor() {
		this._resourceTrade = new Map()
		this._tickCounter = 0

		Object.values(ALL_RESOURCES).forEach(resource => {
			this.resourceTrade.set(resource, [resource.tier * 10])
		})
		makeAutoObservable(this)
	}


	get tickCounter(): number {
		return this._tickCounter
	}

	set tickCounter(value: number) {
		this._tickCounter = value
	}

	get resourceTrade(): Map<Resource, number[]> {
		return this._resourceTrade
	}
}
