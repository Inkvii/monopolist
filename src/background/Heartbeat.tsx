import {PlayerStore} from "context/PlayerStore"

export default function doStuff(store: PlayerStore) {
	store.recalculateResourcesGainPerTick()

	// store.money.forEach(value => value.amount += value.gainPerTick)
	store.ownedResources.forEach(value => value.amount += value.gainPerTick)

	// test counter
	store.counter.counters[0].count += 2

}
