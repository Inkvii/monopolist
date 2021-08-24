import {useObserver} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"
import ExchangeWindow from "view/trading/component/exchange/component/ExchangeWindow"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangePanel(props: Props) {
	return useObserver(() =>
		<div>
			<ExchangeWindow selectedResource={props.selectedResource}/>
		</div>
	)
}

