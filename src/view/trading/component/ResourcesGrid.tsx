import {useObserver} from "mobx-react-lite"
import {MONEY} from "constant/Constants"
import {ResourceData} from "component/resource/ResourceData"
import {PlayerStore} from "context/PlayerStore"
import ResourceContext from "context/ResourceContext"

interface Props {
	playerStore: PlayerStore,
	selectedResource?: ResourceContext
	onSelectResourceCallback: (resourceContext: ResourceContext) => void
}

export default function ResourcesGrid(props: Props) {

	return useObserver(() =>
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
}
