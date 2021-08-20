import {Building, BuildingResource} from "interfaces"
import {useHistory} from "react-router-dom"
import {ROUTES} from "router/Routes"

interface Props {
	building: Building
}

export default function BuildingComponent(props: Props) {

	const history = useHistory()

	const upgradeButtonOnClick = () => {
		history.push(ROUTES.resourceProducerDetail.computeUrl([{key: ":name", value: props.building.name}]))
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
							<p>{res.amount}</p>
						</div>
					))
				}
			</div>
		)
	}

	return (

		<div className={"m-2 shadow p-4"}>
			<div className={"flex flex-row"}>
				<div className={""}>
					<img src={props.building.image} className={"object-cover aspect-w-16 aspect-h-9"} alt={"resource building"}/>
				</div>

				<div className={"flex flex-auto"}>
					<div className={"grid grid-flow-row-dense grid-cols-2 p-4 gap-2 items-center"} style={{width: "100%"}}>
						<p>Name</p>
						<p className={"place-self-center"}>{props.building.name}</p>
						<p>Level</p>
						<p className={"place-self-center"}>{props.building.level}</p>
						<p>Maintenance fees</p>
						{renderResources(props.building.maintenanceFee)}
						<p>Cost to upgrade</p>
						{renderResources(props.building.costToUpgrade)}
						<p>Revenue</p>
						{renderResources(props.building.revenue)}
						<p>Produces</p>
						{renderResources(props.building.produces)}
					</div>
				</div>

			</div>
			<div className={"grid grid-cols-2 gap-4 mt-4"}>
				<button className={"bg-blue-700 rounded text-md text-white uppercase font-medium hover:bg-blue-800 p-2"}>Level up</button>
				<button className={"bg-green-700 rounded text-md text-white uppercase font-medium hover:bg-green-800 p-2"}
				        onClick={() => upgradeButtonOnClick()}>Upgrade options
				</button>
			</div>

		</div>
	)
}
