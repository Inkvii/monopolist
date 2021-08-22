import BuildingListItem from "view/building/list/component/BuildingListItem"
import {BUILDINGS} from "constant/Constants"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import {useObserver} from "mobx-react-lite"

export default function BuildingListPage() {
	const playerStore = useContext(playerContext)

	return useObserver(() =>
		<div className={"flex justify-center"}>

			{/*<div>*/}
			<div className={"flex flex-col justify-center self-center"}>
				{Object.values(BUILDINGS).map(building => <BuildingListItem key={building.name} building={building}
				                                                            ownedResources={playerStore.ownedResources}/>)}
			</div>
			{/*</div>*/}
		</div>
	)
}
