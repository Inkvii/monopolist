import {useObserver} from "mobx-react-lite"
import Resource, {MONEY} from "constant/Constants"

interface Props {
	resource?: Resource
	amount: number,
	callback: (amount: number) => void,
	className?: string
}

export default function ExchangeResourceAmountPicker(props: Props) {

	return useObserver(() =>
		<div className={`shadow-md bg-gray-200 hover:shadow-xl hover:cursor-pointer ${props.className}`}
		     onClick={() => props.callback(props.amount)}>
			<div className={"flex flex-col items-center"}>
				<div className={"p-2 w-20"}>
					<img src={props.resource?.icon ?? MONEY.gold.icon} alt={""}/>
				</div>
				<p>{props.amount}</p>
			</div>
		</div>
	)
}
