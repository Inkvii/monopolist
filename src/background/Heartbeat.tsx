import {PlayerStore} from "context/PlayerStore"

export default function doStuff(store: PlayerStore) {
	let moneyGain = 0
	store.buildings.forEach(building => {
		building.revenue?.flatMap(revenue => revenue.amount).forEach(val => {
			moneyGain += val
		})
	})
	let maintenanceFee = 0
	store.buildings.forEach(building => {
		building.maintenanceFee?.flatMap(fee => fee.amount).forEach(val => {
			maintenanceFee += val
		})
	})
	store.money += (moneyGain - maintenanceFee)

	store.ownedResources = store.ownedResources.map(value => {
		return {...value, amount: value.amount + value.gainPerTick}
	})

}
