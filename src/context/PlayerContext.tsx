import {Player} from "interfaces"
import {RESOURCE} from "constant/Constants"
import {atom} from "recoil"


// export const player: Player = {
// 	ownedResources: [],
// 	money: 0
// }
export const player: Player = {
	money: 123,
	ownedResources: [{
		resource: RESOURCE.wood,
		gainPerTick: 1.25,
		amount: 106
	}, {
		resource: RESOURCE.iron,
		gainPerTick: 12.25,
		amount: 56
	}
	]
}

export const PlayerContext = atom({
	key: "PlayerContext",
	default: player
})
