import {useContext} from "react"
import {useObserver} from "mobx-react-lite"
import {globalContext} from "context/GlobalContext"

export default function CounterComponent() {
	const store = useContext(globalContext).counterStore

	const clickMe = () => {
		console.log("Clicked")
		store.counters[0].count += 1
		console.log("Count - " + store.counters[0].count)
	}


	return useObserver(() => (
		<div className={"flex flex-col items-center"}>
			<p className={"text-lg"}>{store.counters[0].count}</p>
			<button className={"justify-center bg-green-900 text-white px-8 py-2"} onClick={() => clickMe()}>Click me</button>
		</div>
	))
}
