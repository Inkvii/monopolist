import {PlayerStore} from "context/PlayerStore"
import {BuildingService} from "context/service/BuildingService"
import {createContext} from "react"
import {Counter, CounterHolder} from "context/Counter"
import {makeAutoObservable} from "mobx"
import ResourceService from "context/service/ResourceService"
import TradingStore from "context/TradingStore"
import TradingService from "context/service/TradingService"

export default class GlobalContext {
	private readonly _playerStore: PlayerStore
	private readonly _counterStore: CounterHolder
	private readonly _tradingStore: TradingStore

	private readonly _buildingService: BuildingService
	private readonly _resourceService: ResourceService
	private readonly _tradingService: TradingService

	constructor() {
		// stores
		this._playerStore = new PlayerStore()
		this._counterStore = new CounterHolder([new Counter(0)])
		this._tradingStore = new TradingStore()

		//services
		this._buildingService = new BuildingService(this)
		this._resourceService = new ResourceService(this.playerStore)
		this._tradingService = new TradingService(this.tradingStore)

		makeAutoObservable(this)
	}


	get tradingStore(): TradingStore {
		return this._tradingStore
	}

	get tradingService(): TradingService {
		return this._tradingService
	}

	get resourceService(): ResourceService {
		return this._resourceService
	}

	get playerStore(): PlayerStore {
		return this._playerStore
	}

	get buildingService(): BuildingService {
		return this._buildingService
	}

	get counterStore(): CounterHolder {
		return this._counterStore
	}
}

export const globalContext = createContext(new GlobalContext())
