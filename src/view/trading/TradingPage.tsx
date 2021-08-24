import {useObserver} from "mobx-react-lite"
import {useContext, useState} from "react"
import {globalContext} from "context/GlobalContext"
import ResourceContext from "context/ResourceContext"
import ExchangePanel from "view/trading/component/exchange/ExchangePanel"
import ResourcesGrid from "view/trading/component/ResourcesGrid"
import Menu from "view/trading/component/Menu"
import ResourceGraph from "view/trading/component/ResourceGraph"

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
				<ResourceGraph selectedResource={selectedResource} className={"w-1/2"}/>
				<Menu callback={sellResources} text={"Sell"} buttonColor={"bg-blue-700"}/>
			</div>
		</div>
	)
}


