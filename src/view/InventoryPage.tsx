import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import {useObserver} from "mobx-react-lite"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import BuildingComponent from "component/resource/BuildingComponent"
import {MONEY, RESOURCE} from "constant/Constants"
import {Building} from "interfaces"

export default function InventoryPage() {

	const playerStore = useContext(playerContext)

	const onClickEvent = (name: string) => {
		playerStore.incrementOwnedResourceAmount(name)
	}

	const testingBuilding: Building = {
		name: "Lumbermill",
		costToUpgrade: [{
			resource: RESOURCE.iron,
			amount: 120,
		}, {
			resource: RESOURCE.wood,
			amount: 50,
		}
		],
		image: "https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
		level: 1,
		produces: [
			{
				resource: RESOURCE.wood,
				amount: 2,
			}
		],
		maintenanceFee: [{
			resource: MONEY.gold,
			amount: 12
		}],
		revenue: [{
			resource: MONEY.gold,
			amount: 20
		}]
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


			<div className={"grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 m-4"}>
				{
					["Lumber mill camp", "Lumbermill", "Lumber jack"].map((name) => {
						const modifiedBuild = {...testingBuilding, name: name}
						return (
							<BuildingComponent key={modifiedBuild.name} building={modifiedBuild}/>
						)
					})
				}

			</div>
		</div>
	)
}
