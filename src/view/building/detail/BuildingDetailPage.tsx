import {useHistory, useParams} from "react-router-dom"
import {useContext} from "react"
import {globalContext} from "context/GlobalContext"
import {observer, useObserver} from "mobx-react-lite"

interface ParamTypes {
	name: string
}

export default function BuildingDetailPage() {
	const {name} = useParams<ParamTypes>()
	const context = useContext(globalContext)
	const history = useHistory()

	const building = context.playerStore.buildings.find(res => res.name === name)

	const goBack = () => {
		history.goBack()
	}

	const upgradeBuilding = () => {
		if (!building) {
			return
		}
		context.buildingService.levelUpBuilding(building)
	}

	const BuildingDetail = observer(() => {
		if (!building) {
			return (
				<div>
					Building is undefined
				</div>
			)
		}

		return (
			<div>
				{building.name}, {building.isActive ? "Yes" : "No"}, {building.level}

				<div>
					<button className={"bg-green-900 text-white py-2 w-auto text-lg px-6 m-2"} onClick={() => upgradeBuilding()}>Upgrade to
						level {building.level + 1}</button>
				</div>
			</div>
		)
	})


	return useObserver(() => (
		<div>
			{name}
			<BuildingDetail/>
			<div>
				<button className={"bg-green-900 text-white py-2 w-auto text-lg px-6 m-2"} onClick={() => goBack()}>Go back</button>
			</div>

		</div>
	))
}
