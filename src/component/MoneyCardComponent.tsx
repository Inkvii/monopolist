import {ResourceContext} from "interfaces"

interface Props {
	money: ResourceContext[]
}

export default function MoneyCardComponent(props: Props) {

	return (
		<div className={"flex justify-center"}>
			<div className={"flex shadow-lg justify-center items-center px-16 py-4"}>
				{
					props.money.map(money => (
						<div key={money.resource.name} className={"flex flex-row items-center p-1"}>
							<img src={money.resource.icon} style={{height: 50, marginRight: 10}} alt={"resource"}/>
							<p className={"text-4xl"}>{money.amount}</p>
							<p className={"text-sm pl-2"}>{money.gainPerTick} / min</p>

						</div>
					))
				}

			</div>
		</div>
	)
}
