import {PlayerStore} from "context/PlayerStore"

export default function doStuff(store: PlayerStore) {
	store.money += 1

	store.ownedResources = store.ownedResources.map(value => {
		return {...value, amount: value.amount + value.gainPerTick}
	})

}
