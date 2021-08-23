import {useHistory, useParams} from "react-router-dom"
import {useContext} from "react"
import {globalContext} from "context/GlobalContext"
import {observer, useObserver} from "mobx-react-lite"
import BuildingResourceTable from "view/building/component/BuildingResourceTable"

interface ParamTypes {
	name: string
}

export default function BuildingDetailPage() {
	const {name} = useParams<ParamTypes>()
	const context = useContext(globalContext)
	const history = useHistory()

	const building = context.playerStore.buildings.find(res => res.name === name)

	const goBack = () => {
		history.goBack()
	}

	const upgradeBuilding = () => {
		if (!building) {
			return
		}
		context.buildingService.levelUpBuilding(building)
	}

	const BuildingDetail = observer(() => {
		if (!building) {
			return (
				<div>
					Building is undefined
				</div>
			)
		}

		const Content = observer(() => {
			return (
				<div>
					Content

					<BuildingResourceTable building={building} className={"table-auto shadow-md rounded p-8 m-4 padded-rows"}/>

				</div>
			)
		})

		const ButtonMenu = observer(() => {
			return (
				<div className={"border-black flex flex-col"}>
					<button className={"bg-blue-800 text-white py-2 w-auto text-lg px-6 m-2"} onClick={() => goBack()}>Go back</button>
					<button className={"bg-green-900 text-white py-2 w-auto text-lg px-6 m-2"} onClick={() => upgradeBuilding()}>Upgrade to
						level {building.level + 1}</button>
				</div>
			)
		})

		return (
			<div className={"grid auto-cols-auto gap-4"}>
				<div className={"flex justify-center"}>
					<img src={building.image} alt={"building"}/>
				</div>

				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, neque, quos? A, consectetur dicta dignissimos doloribus
					ducimus facilis id illum ipsam nam non numquam obcaecati quia reiciendis reprehenderit tempora voluptatum!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, neque, quos? A, consectetur dicta dignissimos doloribus
					ducimus facilis id illum ipsam nam non numquam obcaecati quia reiciendis reprehenderit tempora voluptatum!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, neque, quos? A, consectetur dicta dignissimos doloribus
					ducimus facilis id illum ipsam nam non numquam obcaecati quia reiciendis reprehenderit tempora voluptatum!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, neque, quos? A, consectetur dicta dignissimos doloribus
					ducimus facilis id illum ipsam nam non numquam obcaecati quia reiciendis reprehenderit tempora voluptatum!
				</div>

				<div className={"text-4xl lg:col-span-2 sm:col-span-1 mt-8 text-center"}>
					{building.name}
					<p className={"text-sm"}>(level {building.level})</p>
				</div>

				<ButtonMenu/>
				<Content/>


				{/*{building.name}, {building.isActive ? "Yes" : "No"}, {building.level}*/}


			</div>
		)
	})


	return useObserver(() => (
		<div>
			<BuildingDetail/>
			<div>

			</div>

		</div>
	))
}
