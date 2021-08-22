import GlobalContext from "context/GlobalContext"

export default function doStuff(store: GlobalContext) {
	store.playerStore.buildings
		.filter(building => building.isActive)
		.forEach(building => store.buildingService.turnOffBuildingsWithoutNeededResources(building))
	store.resourceService.recalculateResourcesGainPerTick()

	// store.money.forEach(value => value.amount += value.gainPerTick)
	store.playerStore.ownedResources.forEach(value => value.amount += value.gainPerTick)

	// test counter
	store.counterStore.counters[0].count += 2

}
