interface Props {
	money: number
}

export default function MoneyCardComponent(props: Props) {

	return (
		<div className={"flex justify-center"}>
			<div className={"flex shadow-lg justify-center items-center px-16 py-6"}>
				<img src={"resources/gold.PNG"} style={{height: 50, paddingRight: 10}} alt={"resource"}/>
				<p className={"text-4xl"}>{props.money}</p>
			</div>
		</div>
	)
}
