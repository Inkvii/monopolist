import {ChartData, ChartOptions} from "chart.js"
import {Line} from "react-chartjs-2"


interface Props {
	labelName: string,
	axisX: string[] | number[],
	axisY: number[],

}

export default function LineGraph(props: Props) {
	// @ts-ignore
	const data: ChartData = {
		labels: props.axisX,
		datasets: [
			{
				label: props.labelName,
				fill: false,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: props.axisY
			}
		]
	}

	const options: ChartOptions = {
		// aspectRatio: 10,

	}

	return (
		<Line data={data} options={options}/>
	)
}
