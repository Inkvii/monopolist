import Building from "context/Building"
import {hasEnoughOfResources} from "service/ResourceService"
import ResourceContext from "context/ResourceContext"
import {makeAutoObservable} from "mobx"
import GlobalContext from "context/GlobalContext"
import {BuildingResource} from "interfaces"

export class BuildingService {
	private globalContext: GlobalContext

	constructor(globalContext: GlobalContext) {
		this.globalContext = globalContext
		makeAutoObservable(this)
	}


	buyBuilding(building: Building) {
		try {
			this.globalContext.playerStore.ownedResources = this.globalContext.resourceService.minus(this.globalContext.playerStore.ownedResources, building.costToUpgrade) as ResourceContext[]
			console.debug(`Funds for building ${building.name} are acuqired. Adding it to player's buildings`)
			this.globalContext.playerStore.buildings.push(building)
		} catch (error: any) {
			console.warn("Cannot buy a building - " + error.message)
		}
	}

	turnOffBuildingsWithoutNeededResources(building: Building) {
		if (!hasEnoughOfResources(this.globalContext.playerStore.ownedResources, building.consumes)) {
			console.warn(`Buildings ${building.name} cannot produce anything due to missing resources`)
			building.isActive = false
		}
	}

	calculateCostToUpgrade(resourceContext: ResourceContext[] | BuildingResource[], currentLevel: number, fixedNumber: number): ResourceContext[] | BuildingResource[] {
		// @ts-ignore
		return [...resourceContext].map(res => {
			// @ts-ignore
			return {...res, amount: Math.ceil(res.amount + (currentLevel / 100 * res.amount) + fixedNumber)}
		})
	}

	levelUpBuilding(building: Building) {
		if (!hasEnoughOfResources(this.globalContext.playerStore.ownedResources, building.costToUpgrade)) {
			console.warn("Cannot level up a building")
		}

		try {
			this.globalContext.playerStore.ownedResources = this.globalContext.resourceService.minus(this.globalContext.playerStore.ownedResources, building.costToUpgrade) as ResourceContext[]
			console.debug(`Funds for building ${building.name} are acuqired. Adding it to player's buildings`)
			building.level++
			building.costToUpgrade = this.calculateCostToUpgrade(building.costToUpgrade, building.level, 35)
			building.produces = this.calculateCostToUpgrade(building.produces, building.level, 1)
			building.consumes = this.calculateCostToUpgrade(building.consumes, building.level, 1)
		} catch (error: any) {
			console.warn("Cannot level up a building - " + error?.message)
		}
	}
}
