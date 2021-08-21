import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import {useObserver} from "mobx-react-lite"

export default function CounterComponent() {
	const store = useContext(playerContext)

	const clickMe = () => {
		console.log("Clicked")
		store.counter.counters[0].count += 1
		console.log("Count - " + store.counter.counters[0].count)
	}


	return useObserver(() => (
		<div className={"flex flex-col items-center"}>
			<p className={"text-lg"}>{store.counter.counters[0].count}</p>
			<button className={"justify-center bg-green-900 text-white px-8 py-2"} onClick={() => clickMe()}>Click me</button>
		</div>
	))
}
