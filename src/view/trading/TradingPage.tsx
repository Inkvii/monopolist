import {observer, useObserver} from "mobx-react-lite"
import {ResourceData} from "component/resource/ResourceData"
import {useContext, useState} from "react"
import {globalContext} from "context/GlobalContext"
import {PlayerStore} from "context/PlayerStore"
import ResourceContext from "context/ResourceContext"

export default function TradingPage() {
	const context = useContext(globalContext)
	const [selectedResource, setSelectedResource] = useState<ResourceContext | undefined>(undefined)

	const buyResources = (amount: number) => {
		if (!selectedResource) {
			return
		}

		context.resourceService.incrementOwnedResourceAmount(selectedResource.resource.name, amount)
	}

	const sellResources = (amount: number) => {
		if (!selectedResource) {
			return
		}

		context.resourceService.incrementOwnedResourceAmount(selectedResource.resource.name, -1 * amount)

	}

	return useObserver(() =>
		<div>
			<ResourcesGrid playerStore={context.playerStore} onSelectResourceCallback={setSelectedResource} selectedResource={selectedResource}/>
			<div className={"flex justify-around"}>
				<Menu callback={buyResources} text={"Buy"} buttonColor={"bg-green-700"}/>
				<Graph/>
				<Menu callback={sellResources} text={"Sell"} buttonColor={"bg-blue-700"}/>
			</div>
		</div>
	)
}


const Menu = observer((props: { callback: Function, text: string, buttonColor: string }) => {
	return (
		<div className={"flex flex-col"}>
			<button className={`${props.buttonColor} rounded text-white px-4 py-2 m-2`} onClick={() => props.callback(10)}>{props.text} 10
			</button>
			<button className={`${props.buttonColor} rounded text-white px-4 py-2 m-2`} onClick={() => props.callback(50)}>{props.text} 50
			</button>
			<button className={`${props.buttonColor} rounded text-white px-4 py-2 m-2`} onClick={() => props.callback(1000)}>{props.text} 1 000
			</button>
			<button className={`${props.buttonColor} rounded text-white px-4 py-2 m-2`} onClick={() => props.callback(5000)}>{props.text} 5 000
			</button>
			<button className={`${props.buttonColor} rounded text-white px-4 py-2 m-2`} onClick={() => props.callback(10000)}>{props.text} 10
				000
			</button>
		</div>
	)
})

const Graph = observer(() => {
	return (
		<div className={"border w-1/2 h-1/4"}>Big graph</div>
	)

})


interface ResourceGridProps {
	playerStore: PlayerStore,
	selectedResource?: ResourceContext
	onSelectResourceCallback: (resourceContext: ResourceContext) => void
}

const ResourcesGrid = observer((props: ResourceGridProps) => {

	return (
		<div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 gap-10 mb-20"}>
			{
				props.playerStore.ownedResources.map(res =>
					<div key={res.resource.name} className={`${res === props.selectedResource ? "border-purple-500 border-2 rounded" : ""}`}>
						<div className={`select-none shadow-md p-2 bg-gray-100`}
						     onClick={() => props.onSelectResourceCallback(res)}>
							<ResourceData resourceHolder={res}/>
						</div>
					</div>
				)
			}
		</div>
	)
})
