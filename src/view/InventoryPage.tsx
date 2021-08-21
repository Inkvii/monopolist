import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import {useObserver} from "mobx-react-lite"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import BuildingComponent from "component/resource/BuildingComponent"

export default function InventoryPage() {

	const playerStore = useContext(playerContext)

	const onClickEvent = (name: string) => {
		playerStore.incrementOwnedResourceAmount(name)
	}

	return useObserver(() =>
		<div>
			<MoneyCardComponent money={playerStore.money}/>
			<div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 gap-10"}>
				{
					playerStore.ownedResources.map(holder => (
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

			</div>
		</div>
	)
}
