import BuildingListItem from "view/building/list/component/BuildingListItem"
import {BUILDINGS} from "constant/Constants"
import {useContext} from "react"
import {observer, useObserver} from "mobx-react-lite"
import Building from "context/Building"
import {Check} from "@material-ui/icons"
import {globalContext} from "context/GlobalContext"

export default function BuildingListPage() {
	const context = useContext(globalContext)

	const buyButtonOnClick = (building: Building) => {
		console.log("Trying to buy things right away")
		context.buildingService.buyBuilding(building)
	}

	const AvailableBuildingListHolder = observer(() => {
		const buildingsToBuy = Object.values(BUILDINGS)
			.filter(building => !context.playerStore.buildings.includes(building))
		if (buildingsToBuy.length > 0) {
			return (
				<div>
					{
						buildingsToBuy.map(building => <BuildingListItem key={building.name}
						                                                 building={building}
						                                                 ownedResources={context.playerStore.ownedResources}
						                                                 buyButtonOnClickCallback={() => buyButtonOnClick(building)}/>)
					}
				</div>
			)
		} else {
			return (

				<div className={"shadow-md my-4 py-2 px-8 flex flex-1 flex-col justify-center items-center bg-green-500 rounded"}>
					<Check className={"opacity-70 text-white m-6"} style={{fontSize: "96px"}}/>
					<p className={"text-xl text-white px-2 pb-2"}>There are no new building you can buy</p>
				</div>
			)
		}
	})

	return useObserver(() =>
		<div className={"flex justify-center"}>
			<div className={"flex flex-col justify-center self-center"}>
				<AvailableBuildingListHolder/>
			</div>
		</div>
	)
}
