import {PlayerStore} from "context/PlayerStore"
import Building from "context/Building"
import {hasEnoughOfResources} from "service/ResourceService"
import ResourceContext from "context/ResourceContext"
import {makeAutoObservable} from "mobx"

export class BuildingService {
	private store: PlayerStore

	constructor(store: PlayerStore) {
		this.store = store
		makeAutoObservable(this)
	}


	buyBuilding(building: Building) {
		if (!hasEnoughOfResources(this.store.ownedResources, building.costToUpgrade)) {
			console.debug("Cannot buy a building " + JSON.stringify(building))
			return
		}

		console.debug("Proceeding with building acquiring")

		for (const resource of building.costToUpgrade) {
			const resInStore: ResourceContext | undefined = this.store.ownedResources.find(res => res.resource === resource.resource)
			if (!resInStore) {
				throw new Error(`Unexpected error - Could not find resource ${resource.resource.name} in player store.`)
			}
			resInStore.amount -= resource.amount
		}

		console.debug(`Funds for building ${building.name} are acuqired. Adding it to player's buildings`)
		this.store.buildings.push(building)
	}
}
