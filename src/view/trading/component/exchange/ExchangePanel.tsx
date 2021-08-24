import {useObserver} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"
import ExchangeWindow from "view/trading/component/exchange/component/ExchangeWindow"
import ExchangeRates from "view/trading/component/exchange/component/ExchangeRates"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangePanel(props: Props) {
	return useObserver(() =>
		<div className={"flex flex-col justify-center"}>
			<ExchangeWindow selectedResource={props.selectedResource}/>
			<ExchangeRates selectedResource={props.selectedResource}/>
		</div>
	)
}

