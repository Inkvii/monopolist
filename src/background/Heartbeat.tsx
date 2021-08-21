import {PlayerStore} from "context/PlayerStore"

export default function doStuff(store: PlayerStore) {
	store.recalculateMoneyGains()

	store.money = store.money.map(value => {
		return {...value, amount: value.amount + value.gainPerTick}
	})


	store.ownedResources = store.ownedResources.map(value => {
		return {...value, amount: value.amount + value.gainPerTick}
	})

}
