import ResourceContext from "context/ResourceContext"
import {observer, useObserver} from "mobx-react-lite"
import {useContext, useEffect, useState} from "react"
import {globalContext} from "context/GlobalContext"
import {ResourceData} from "component/resource/ResourceData"

interface Props {
	resourceHolder: ResourceContext
}

export default function ResourceBox(props: Props) {
	const [numberOfClicks, setNumberOfClicks] = useState<number>(0)

	const resourceService = useContext(globalContext).resourceService

	const onButtonClick = () => {
		setNumberOfClicks(numberOfClicks + 1)
	}

	const onReceivedCallback = () => {
		resourceService.incrementOwnedResourceAmount(props.resourceHolder.resource.name, 1)
		setNumberOfClicks(0)
	}


	return useObserver(() =>
		<div className={"select-none shadow-md p-2 bg-gray-100 flex flex-col align-bottom"} onClick={onButtonClick}>
			<ResourceData resourceHolder={props.resourceHolder}/>
			<ProgressBar currentValue={numberOfClicks} callback={() => onReceivedCallback()}
			             maxValue={props.resourceHolder.manualRequiredClicks}/>
		</div>
	)
}


const ProgressBar = observer((props: { currentValue: number, maxValue: number, callback: Function }) => {

	const [width, setWidth] = useState<number>(0)
	const maxWidth = 100

	useEffect(() => {
		const calculatedWidth = Math.floor(props.currentValue / props.maxValue * 100)
		setWidth(calculatedWidth > maxWidth ? maxWidth : calculatedWidth)
	}, [props])

	useEffect(() => {
		if (width >= maxWidth) {
			props.callback()
		}
		// eslint-disable-next-line
	}, [width])


	return (
		<div className={"bg-gray-200 text-center"}>
			<div className={"bg-gray-400"} style={{height: 20, width: `${width}%`}}>
				<p className={"px-2"}>{width}%</p>
			</div>
		</div>
	)
})
