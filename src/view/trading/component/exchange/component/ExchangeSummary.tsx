import {useObserver} from "mobx-react-lite"
import Resource from "constant/Constants"

interface Props {
	currentMoneyAmount: number,
	moneyResource: Resource,
	cost: number,
	className?: string
}

export default function ExchangeSummary(props: Props) {

	const MoneyIcon = () => <img src={props.moneyResource?.icon} width={32} alt={""} className={"mx-2"}/>

	return useObserver(() =>
		<div className={`flex flex-col text-xl p-4 m-4 w-1/4 ${props.className}`}>
			<div className={"flex text-right justify-end"}>
				<p>{props.currentMoneyAmount}</p>
				<MoneyIcon/>
			</div>
			<div className={"flex text-right justify-end mt-1"}>
				<p className={`${props.cost >= 0 ? "text-green-800" : "text-red-700"}`}>{props.cost}</p>
				<MoneyIcon/>
			</div>
			<div className={"flex text-right justify-end mt-1 border-t-2"}>
				<p>{props.currentMoneyAmount + props.cost}</p>
				<MoneyIcon/>
			</div>
		</div>
	)
}
