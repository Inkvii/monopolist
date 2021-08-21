import CounterComponent from "view/counter/CounterComponent"

export default function EmptyPage() {
	return (
		<div className={"flex justify-center flex-col"} style={{marginTop: "25vh"}}>
			<div className={"flex shadow-lg p-16"}>
				<h3 className={"text-5xl"}>This is just an empty page</h3>
			</div>
			<div className={"m-4"}>
				<CounterComponent/>
			</div>
		</div>
	)
}
