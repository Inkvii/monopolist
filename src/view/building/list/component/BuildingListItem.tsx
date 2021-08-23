import Building from "context/Building"
import {hasEnoughOfResources} from "service/ResourceService"
import {useObserver} from "mobx-react-lite"
import {useEffect, useState} from "react"
import ResourceContext from "context/ResourceContext"
import BuildingResourceTable from "view/building/component/BuildingResourceTable"

interface Props {
	building: Building
	ownedResources: ResourceContext[]
	buyButtonOnClickCallback: Function
}

export default function BuildingListItem(props: Props) {

	const [buyButtonEnabled, setBuyButtonEnabled] = useState<boolean>(false)

	useEffect(() => {
		setBuyButtonEnabled(hasEnoughOfResources(props.ownedResources, props.building.costToUpgrade))
	}, [props.building.costToUpgrade, props.ownedResources])


	return useObserver(() =>
		<div className={"shadow-md my-4 pb-4 flex flex-1 flex-col"}>
			<div className={"flex justify-center bg-blue-100 py-2 rounded-t-md"}>
				<p className={"text-lg"}>{props.building.name}</p>
			</div>

			<div className={"flex flex-row px-4 pt-4"}>
				<img src={props.building.image} className={"object-cover max-h-40"} alt={"resource building"}/>
				<BuildingResourceTable building={props.building} className={"mx-4"}/>
			</div>
			<div className={"grid grid-cols-1 gap-4 mt-4 px-4"}>
				<button className={"bg-blue-700 rounded text-md text-white uppercase font-medium hover:bg-blue-800 p-2 disabled:bg-gray-500"}
				        disabled={!buyButtonEnabled}
				        onClick={() => props.buyButtonOnClickCallback()}>Buy
				</button>

			</div>
		</div>
	)
}

