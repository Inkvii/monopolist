import Building from "context/Building"
import {BUILDINGS} from "constant/Constants"
import {renderResources} from "service/ResourceService"

interface Props {
	building: Building
}

export default function BuildingListItem(props: Props = {building: BUILDINGS.lumbermill}) {


	return (
		<div className={"shadow-md my-4 p-8 flex flex-1 flex-col"}>
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
						<p>Consumes</p>
						{renderResources(props.building.consumes)}
						<p>Produces</p>
						{renderResources(props.building.produces)}
						<p>Cost to upgrade</p>
						{renderResources(props.building.costToUpgrade)}
					</div>
				</div>

			</div>
			<div className={"grid grid-cols-2 gap-4 mt-4 px-4"}>
				<button className={"bg-blue-700 rounded text-md text-white uppercase font-medium hover:bg-blue-800 p-2"}>
					Level up
				</button>
				<button className={"bg-blue-700 rounded text-md text-white uppercase font-medium hover:bg-blue-800 p-2"}>
					Buy
				</button>

			</div>
		</div>
	)
}

