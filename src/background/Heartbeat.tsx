import GlobalContext from "context/GlobalContext"
import {RESOURCE} from "constant/Constants"


export default function doStuff(context: GlobalContext) {

	playerStuff(context
	)
	// test counter
	context.counterStore.counters[0].count += 2

	tradingStuff(context)

}

function playerStuff(context: GlobalContext) {
	context.playerStore.buildings
		.filter(building => building.isActive)
		.forEach(building => context.buildingService.turnOffBuildingsWithoutNeededResources(building))
	context.resourceService.recalculateResourcesGainPerTick()

	context.playerStore.ownedResources.forEach(value => value.amount += value.gainPerTick)
}

function tradingStuff(store: GlobalContext) {
	store.tradingService.addTick()
	if (store.tradingService.shouldUpdateTradeHistory()) {

		Object.values(RESOURCE).forEach(res => {

			const modifier: number = 5
			const lastPrice = store.tradingService.getLastResourcePrice(res)
			const randomNumber = (Math.random() * modifier) - modifier / 2 + lastPrice

			const calculatedNextPrice = Math.floor(randomNumber * 100) / 100
			// price will have lower boundaries
			const finalNextPrice = calculatedNextPrice < res.tier * 10 ? res.tier * 10 : calculatedNextPrice

			store.tradingService.addValueToResourceHistory(res, finalNextPrice)
		})
	}
}

