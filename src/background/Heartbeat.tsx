import {PlayerStore} from "context/PlayerStore"
import {RESOURCE} from "constant/Constants"

export default function doStuff(store: PlayerStore) {
	store.money += 1
	store.incrementOwnedResourceAmount(RESOURCE.wood.name)

}
