import {PlayerContext} from "context/PlayerStore"
import {RESOURCE} from "constant/Constants"

export default function doStuff(store: PlayerContext) {
	store.money += 1
	store.incrementOwnedResourceAmount(RESOURCE.wood.name)

}
