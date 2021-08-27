import TradingStore from "context/TradingStore"
import {makeAutoObservable} from "mobx"
import Resource from "constant/Constants"

export default class TradingService {
	private readonly tradingStore: TradingStore

	constructor(tradingStore: TradingStore) {
		this.tradingStore = tradingStore
		makeAutoObservable(this)
	}

	addValueToResourceHistory(resource: Resource, value: number) {
		const resourceHistory = this.tradingStore.resourceTrade.get(resource)
		if (!resourceHistory) {
			return
		}
		resourceHistory.push(value)
	}

	getReducedListOfResourceHistory(resource: Resource | undefined, numberOfValues: number): number[] | undefined {
		if (!resource) {
			return
		}

		const slicedHistory = this.tradingStore.resourceTrade.get(resource)?.slice(numberOfValues * -1)
		return slicedHistory
	}

	addTick() {
		this.tradingStore.tickCounter++
	}

	shouldUpdateTradeHistory() {
		return this.tradingStore.tickCounter % 10 === 0
	}

	getLastResourcePrice(resource: Resource) {
		const history = this.tradingStore.resourceTrade.get(resource)
		if (!history) {
			return resource.tier
		}

		return history[history.length - 1]
	}
}
