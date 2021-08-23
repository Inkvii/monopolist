import {observer} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"

interface Props {
	resourceHolder: ResourceContext
}

export const ResourceData = observer((props: Props) => {
	return (
		<div className={"grid grid-cols-2 gap-x-3 p-2 flex-grow"}>
			<img className={"row-span-3 align-middle max-h-20 max-w-20"} src={props.resourceHolder.resource.icon} alt={"pic placeholder"}/>
			<p>{props.resourceHolder.resource.name}</p>
			<p>{Math.floor(props.resourceHolder.amount)}</p>
			<p>{props.resourceHolder.gainPerTick} / min</p>
		</div>
	)
})
