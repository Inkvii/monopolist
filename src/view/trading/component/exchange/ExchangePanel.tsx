import {useObserver} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"
import ExchangeWindow from "view/trading/component/exchange/component/ExchangeWindow"
import ExchangeForm from "view/trading/component/exchange/ExchangeForm"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangePanel(props: Props) {
	return useObserver(() =>
		<div className={"flex flex-col justify-center shadow-lg px-1 py-4 m-2"}>
			<ExchangeWindow selectedResource={props.selectedResource}/>
			{/*<ExchangeRates selectedResource={props.selectedResource}/>*/}
			<ExchangeForm selectedResource={props.selectedResource}/>
		</div>
	)
}

