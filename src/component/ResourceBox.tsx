import {ResourceContext} from "interfaces"

interface Props {
	resourceHolder: ResourceContext
}

export default function ResourceBox(props: Props) {

	return (
		<div className={"p-2 w-36 h-20"}>
			<div className={"grid grid-cols-2 grid-rows-3 gap-x-3"}>
				<img className={"row-span-3 align-middle"} src={props.resourceHolder.resource.icon} alt={"pic placeholder"}/>
				<p>{props.resourceHolder.resource.name}</p>
				<p>{Math.floor(props.resourceHolder.amount)}</p>
				<p>+{props.resourceHolder.gainPerTick}/min</p>
			</div>
		</div>
	)
}
