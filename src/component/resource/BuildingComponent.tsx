import {Button} from "@material-ui/core"
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
						<div className={"flex flex-row items-center justify-center"}>
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
			<div className={"flex flex-row"} style={{justifyContent: "stretch"}}>
				<div className={"flex flex-initial"}>
					<img src={props.building.image} style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						verticalAlign: "middle",

						maxHeight: "128",
						width: "100%",
						border: "3px solid black"
					}} alt={"resource building"}/>
				</div>

				<div className={"flex flex-auto"}>

					<div className={"grid grid-cols-2 p-4 gap-2 items-center"} style={{width: "100%"}}>
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
				<Button variant={"contained"} color={"primary"} fullWidth>Level up</Button>
				<Button variant={"contained"} color={"secondary"} fullWidth onClick={() => upgradeButtonOnClick()}>Upgrade options</Button>
			</div>

		</div>
	)
}
