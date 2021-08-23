import {observer, useObserver} from "mobx-react-lite"
import {ResourceData} from "component/resource/ResourceData"
import {useContext, useState} from "react"
import {globalContext} from "context/GlobalContext"
import {PlayerStore} from "context/PlayerStore"
import ResourceContext from "context/ResourceContext"

import balanceIcon from "assets/icons/balance.svg"
import {MONEY} from "constant/Constants"

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
			<ExchangePanel selectedResource={selectedResource}/>
			<div className={"flex justify-around"}>
				<Menu callback={buyResources} text={"Buy"} buttonColor={"bg-green-700"}/>
				<Graph/>
				<Menu callback={sellResources} text={"Sell"} buttonColor={"bg-blue-700"}/>
			</div>
		</div>
	)
}

const ExchangePanel = observer((props: { selectedResource?: ResourceContext }) => {
	return (
		<div className={"flex flex-row md:p-8 md:m-16 sm:p-4 sm:m-4 justify-center bg-gray-300 items-center rounded-2xl"}>
			<div className={"md:w-40 md:h-40 sm:w-20 sm:h-20 bg-gray-200 mx-8 border-gray-500 border-4 shadow-inner rounded-2xl"}>
				<img src={props.selectedResource?.resource.icon} alt={""}/>
			</div>
			<div className={"flex flex-row items-center"}>
				<div className={"md:w-40 md:h-40 sm:w-20 sm:h-20 flex flex-col justify-center items-center "}>
					<img src={balanceIcon} color={"black"} className={"opacity-10"} alt={""}/>
				</div>
			</div>
			<div className={"md:w-40 md:h-40 sm:w-20 sm:h-20 bg-gray-200 mx-8 border-gray-500 border-4 shadow-inner rounded-2xl"}>
				<img src={MONEY.gold.icon} alt={""}/>
			</div>
		</div>
	)
})


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
				props.playerStore.ownedResources.filter(res => !Object.values(MONEY).includes(res.resource)).map(res =>
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
