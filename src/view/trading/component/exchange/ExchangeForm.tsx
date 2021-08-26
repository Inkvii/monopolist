import {useObserver} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"
import ToggleSwitch from "view/trading/component/exchange/component/ToggleSwitch"
import ExchangeResourceAmountPicker from "view/trading/component/exchange/component/ExchangeResourceAmountPicker"
import {useContext, useEffect, useMemo, useState} from "react"
import {MONEY} from "constant/Constants"
import ExchangeSummary from "view/trading/component/exchange/component/ExchangeSummary"
import {globalContext} from "context/GlobalContext"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangeForm(props: Props) {

	const context = useContext(globalContext)
	const [sellMode, setSellMode] = useState<boolean>(true)
	const [selectedAmount, setSelectedAmount] = useState<number | undefined>(undefined)
	const [canProceed, setCanProceed] = useState<boolean>(false)

	const [moneyResource, setMoneyResource] = useState<ResourceContext | undefined>(context.playerStore.ownedResources.find(val => val.resource === MONEY.gold))

	const magicNumber = 10



	const calculateTransactionAmount = useMemo((): number => {
		return (selectedAmount ?? 0) * magicNumber * (sellMode ? 1 : -1)
	}, [selectedAmount, sellMode])


	useEffect(() => {
		console.log("Changed amount: " + selectedAmount)
	}, [selectedAmount])

	return useObserver(() =>
		<div className={"flex flex-col items-center"}>

			<div className={"flex justify-around"}>
				<ToggleSwitch labels={["Buy", "Sell"]} callback={setSellMode}/>
			</div>

			<div className={"flex flex-wrap justify-evenly lg:w-2/3 md:w-full"}>
				{[10, 25, 100, 500, 1000, 5000].map((amount) =>
					<ExchangeResourceAmountPicker key={amount} resource={props.selectedResource?.resource} amount={amount}
					                              callback={setSelectedAmount}
					                              className={amount === selectedAmount ? "bg-green-400" : "hover:bg-gray-300"}/>
				)}
			</div>

			<ExchangeSummary currentMoneyAmount={moneyResource?.amount ?? 0}
			                 moneyResource={moneyResource?.resource ?? MONEY.gold}
			                 cost={calculateTransactionAmount}
			                 validateTransaction={setCanProceed} className={"self-end mr-24"}/>


			<button className={"bg-green-700 px-6 py-3 mt-4 uppercase text-white text-md self-center"} disabled={!canProceed}>Complete trade
			</button>

		</div>
	)
}

