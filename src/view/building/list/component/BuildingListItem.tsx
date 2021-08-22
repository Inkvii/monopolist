import Building from "context/Building"
import {hasEnoughOfResources, renderResources} from "service/ResourceService"
import {useObserver} from "mobx-react-lite"
import {useEffect, useState} from "react"
import ResourceContext from "context/ResourceContext"

interface Props {
	building: Building
	ownedResources: ResourceContext[]
}

export default function BuildingListItem(props: Props) {

	const [buyButtonEnabled, setBuyButtonEnabled] = useState<boolean>(false)

	useEffect(() => {
		console.log("Effect in effect")
		setBuyButtonEnabled(hasEnoughOfResources(props.ownedResources, props.building.costToUpgrade))
	}, [props.building.costToUpgrade, props.ownedResources])

	const buyButtonOnClick = () => {
		console.log("Buying things right away")
	}

	return useObserver(() =>
		<div className={"shadow-md my-4 pb-4 flex flex-1 flex-col"}>
			<div className={"flex justify-center bg-blue-100 py-2 rounded-t-md"}>
				<p className={"text-lg"}>{props.building.name}</p>
			</div>

			<div className={"flex flex-row px-4 pt-4"}>
				<div className={"flex flex-col"}>

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
			<div className={"grid grid-cols-1 gap-4 mt-4 px-4"}>
				<button className={"bg-blue-700 rounded text-md text-white uppercase font-medium hover:bg-blue-800 p-2 disabled:bg-gray-500"}
				        disabled={!buyButtonEnabled}
				        onClick={() => buyButtonOnClick()}>
					Buy
				</button>

			</div>
		</div>
	)
}

