import {useObserver} from "mobx-react-lite"
import {useEffect, useState} from "react"

interface Props {
	labels: [string, string],
	callback: (state: boolean) => void
	className?: string
}

export default function ToggleSwitch(props: Props) {
	const [checked, setChecked] = useState<boolean>(false)

	useEffect(() => {
		console.log('checked change detected')
		props.callback(checked)
		// eslint-disable-next-line
	}, [checked])


	return useObserver(() =>
		<div className="flex items-center justify-center w-full mb-12 p-1">
			<label htmlFor="toggle" className="flex items-center cursor-pointer">
				<div className="relative">
					<input id="toggle" type="checkbox" className="sr-only" onChange={(e) => setChecked(e.target.checked)}/>
					<div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"/>
					<div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"/>
				</div>
				<div className="ml-3 text-gray-700 font-medium">{props.labels[+checked]}</div>
			</label>

		</div>
	)
}
