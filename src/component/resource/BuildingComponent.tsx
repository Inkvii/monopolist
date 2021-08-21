import {Building, BuildingResource} from "interfaces"
import {useHistory} from "react-router-dom"
import {ROUTES} from "router/Routes"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"

interface Props {
	building: Building
}

export default function BuildingComponent(props: Props) {

	const history = useHistory()
	const playerStore = useContext(playerContext)


	const upgradeButtonOnClick = () => {
		history.push(ROUTES.resourceProducerDetail.computeUrl([{key: ":name", value: props.building.name}]))
	}
	const levelUpButtonOnClick = () => {
		playerStore.recalculateResourceGains()
	}

	const renderResources = (resources: BuildingResource[] | undefined) => {
		if (!resources) {
			return
		}

		return (
			<div className={"flex flex-row pl-2 items-center justify-center"}>
				{
					resources?.map(res => (
						<div key={res.resource.name} className={"flex flex-row items-center justify-center"}>
							<img src={res.resource.icon} alt={"my resource"} className={"w-8"}/>
							<p className={"mx-1"}>{res.amount}</p>
						</div>
					))
				}
			</div>
		)
	}

	return (

		<div className={"m-2 shadow pb-4 flex flex-col rounded-t-md"}>
			<div className={"flex justify-center bg-blue-100 py-2 rounded-t-md"}>
				<p className={"text-lg"}>{props.building.name}</p>
			</div>

			<div className={"flex flex-row px-4 pt-4"}>
				<div className={"flex flex-col"}>

					<div className={"flex flex-row justify-around"}>
						<p>Level {props.building.level}</p>
						<p>{props.building.isActive ? "Active" : "Inactive"}</p>
					</div>
					<img src={props.building.image} className={"object-cover w-full"} alt={"resource building"}/>
				</div>

				<div className={"flex"}>
					<div className={"grid grid-cols-2 p-4 gap-2 items-center"}>
						<p>Maintenance fees</p>
						{renderResources(props.building.maintenanceFee)}
						<p>Revenue</p>
						{renderResources(props.building.revenue)}
						<p>Produces</p>
						{renderResources(props.building.produces)}
						<p>Cost to upgrade</p>
						{renderResources(props.building.costToUpgrade)}
					</div>
				</div>

			</div>
			<div className={"grid grid-cols-2 gap-4 mt-4 px-4"}>
				<button className={"bg-blue-700 rounded text-md text-white uppercase font-medium hover:bg-blue-800 p-2"}
				        onClick={() => levelUpButtonOnClick()}>Level up
				</button>
				<button className={"bg-green-700 rounded text-md text-white uppercase font-medium hover:bg-green-800 p-2"}
				        onClick={() => upgradeButtonOnClick()}>Upgrade options
				</button>
			</div>

		</div>
	)
}
