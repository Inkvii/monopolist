import {useObserver} from "mobx-react-lite"

interface Props {
	callback: Function,
	text: string,
	buttonColor: string
}

export default function Menu(props: Props) {

	return useObserver(() =>
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
}
