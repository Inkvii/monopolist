import ResourceBox from "view/inventory/component/ResourceBox"
import MoneyCardComponent from "view/inventory/component/MoneyCardComponent"
import {observer, useObserver} from "mobx-react-lite"
import {useContext} from "react"
import BuildingComponent from "view/inventory/component/BuildingComponent"
import {MONEY, RESOURCE} from "constant/Constants"
import {Add} from "@material-ui/icons"
import {useHistory} from "react-router-dom"
import {ROUTES} from "router/Routes"
import {globalContext} from "context/GlobalContext"

export default function InventoryPage() {

	const context = useContext(globalContext)
	const history = useHistory()

	const goToBuildingView = () => {
		history.push(ROUTES.buildingsPage.path)
	}

	const useCheat = () => {
		context.playerStore.ownedResources.forEach(res => {
			context.resourceService.incrementOwnedResourceAmount(res.resource.name)
		})
	}

	const ResourcesPanel = observer(() =>
		<div>
			<MoneyCardComponent money={context.playerStore.ownedResources.filter((val) => Object.values(MONEY).includes(val.resource))}/>
			<div>
				<button className={"p-4 bg-green-700 text-white"} onClick={useCheat}>Add funds</button>
			</div>
			<div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 gap-10 mb-20"}>
				{
					context.playerStore.ownedResources
						.filter(val => Object.values(RESOURCE).includes(val.resource))
						.map(holder => (
								<ResourceBox key={holder.resource.name} resourceHolder={holder}/>
							)
						)
				}
			</div>
		</div>
	)

	const BuildingComponentsGrid = observer(() =>
		<div className={"grid sm:grid-cols-1 xl:grid-cols-2 gap-5 m-4"}>
			{
				context.playerStore.buildings.map((building) => {
					return (
						<BuildingComponent key={building.name} building={building}/>
					)
				})
			}
			<div className={"group flex shadow-md justify-center hover:bg-gray-200 items-center align-middle"}
			     onClick={() => goToBuildingView()}>
				<Add className={"text-black opacity-10 m-10 group-hover:text-white group-hover:opacity-100"} style={{fontSize: "96px"}}/>
			</div>
		</div>)

	return useObserver(() =>
		<div>
			<ResourcesPanel/>
			<BuildingComponentsGrid/>
		</div>
	)
}
