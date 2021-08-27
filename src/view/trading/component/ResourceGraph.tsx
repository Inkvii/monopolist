import {useEffect, useState} from "react"
import LineGraph from "component/chart/LineGraph"
import Resource from "constant/Constants"

interface Props {
	resource?: Resource
	history?: number[]
	className?: string
}

export default function ResourceGraph(props: Props) {

	const [axisX, setAxisX] = useState<number[]>([])
	const [axisY, setAxisY] = useState<number[]>([])

	useEffect(() => {
		let x: number[] = []
		let y: number[] = []

		props.history?.forEach((value, index) => {
			y.push(value)
			x.push(index)
		})

		setAxisX(x)
		setAxisY(y)

	}, [props.history])

	console.log("Refreshed")

	return (
		<div className={props.className}>
			<LineGraph labelName={props.resource?.name ?? "No resource was selected"} axisX={axisX} axisY={axisY}/>
			{/*<LineGraph labelName={"No resource was selected"} axisX={axisX} axisY={axisY}/>*/}
		</div>
	)
}
