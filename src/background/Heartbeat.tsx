import GlobalContext from "context/GlobalContext"

export default function doStuff(store: GlobalContext) {
	store.resourceService.recalculateResourcesGainPerTick()

	// store.money.forEach(value => value.amount += value.gainPerTick)
	store.playerStore.ownedResources.forEach(value => value.amount += value.gainPerTick)

	// test counter
	store.counterStore.counters[0].count += 2

}
