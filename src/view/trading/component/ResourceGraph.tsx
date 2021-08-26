import {useState} from "react"
import LineGraph from "component/chart/LineGraph"

interface Props {
	//selectedResource?: ResourceContext
	className?: string
}

export default function ResourceGraph(props: Props) {

	const [axisX, setAxisX] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	const [axisY, setAxisY] = useState<number[]>([10, 15, 12, 11, 15, 21, 18, 14, 10, 8])

	console.log("Refreshed")

	return (
		<div className={props.className}>
			{/*<LineGraph labelName={props.selectedResource?.resource.name ?? "No resource was selected"} axisX={axisX} axisY={axisY}/>*/}
			<LineGraph labelName={"No resource was selected"} axisX={axisX} axisY={axisY}/>
		</div>
	)
}
