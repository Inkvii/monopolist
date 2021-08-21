import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import {useObserver} from "mobx-react-lite"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import BuildingComponent from "component/resource/BuildingComponent"
import {MONEY, RESOURCE} from "constant/Constants"
import {Add} from "@material-ui/icons"
import {useHistory} from "react-router-dom"
import {ROUTES} from "router/Routes"

export default function InventoryPage() {

	const playerStore = useContext(playerContext)
	const history = useHistory()

	const onClickEvent = (name: string) => {
		playerStore.incrementOwnedResourceAmount(name)
	}

	const goToBuildingView = () => {
		history.push(ROUTES.buildingsPage.path)
	}

	return useObserver(() =>
		<div>
			<MoneyCardComponent money={playerStore.ownedResources.filter((val) => Object.values(MONEY).includes(val.resource))}/>
			<div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 gap-10"}>
				{
					playerStore.ownedResources.filter(val => Object.values(RESOURCE).includes(val.resource)).map(holder => (
						<div key={holder.resource.name} className={"shadow-md p-2 bg-gray-100"} onClick={() => onClickEvent(holder.resource.name)}>
							<ResourceBox resourceHolder={holder}/>
						</div>
						)
					)
				}
			</div>


			<div className={"grid sm:grid-cols-1 xl:grid-cols-2 gap-5 m-4"}>
				{
					playerStore.buildings.map((building) => {
						return (
							<BuildingComponent key={building.name} building={building}/>
						)
					})
				}
				<div className={"group flex shadow-md justify-center hover:bg-gray-200"} onClick={() => goToBuildingView()}>
					<Add className={"text-black opacity-10 m-10 group-hover:text-white group-hover:opacity-100"} style={{fontSize: "96px"}}/>
				</div>
			</div>
		</div>
	)
}
