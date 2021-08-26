import {useObserver} from "mobx-react-lite"
import {useContext, useState} from "react"
import {globalContext} from "context/GlobalContext"
import ResourceContext from "context/ResourceContext"
import ResourcesGrid from "view/trading/component/ResourcesGrid"
import ResourceGraph from "view/trading/component/ResourceGraph"
import ExchangeWindow from "view/trading/component/exchange/component/ExchangeWindow"
import ExchangeForm from "view/trading/component/exchange/ExchangeForm"

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
		<div className={"mb-40"}>
			<ResourcesGrid playerStore={context.playerStore} onSelectResourceCallback={setSelectedResource} selectedResource={selectedResource}/>
			<div className={"flex justify-center"}>

				<div className={"shadow-md p-4 xl:w-8/12 lg:w-11/12 md:w-full"}>
					<div className={"flex justify-center"}>
						<ResourceGraph className={"w-1/2"}/>
					</div>
					<ExchangeWindow selectedResource={selectedResource}/>
					<ExchangeForm selectedResource={selectedResource}/>
				</div>

			</div>
		</div>
	)
}


