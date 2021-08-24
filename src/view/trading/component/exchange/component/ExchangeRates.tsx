import {useObserver} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangeRates(props: Props) {

	return useObserver(() =>
		<div className={"flex flex-col items-center"}>
			<div className="flex flex-col">
				<div className={"shadow overflow-hidden border-b border-gray-200 rounded-lg px-4 py-2 my-2"}>
					<table className={"table-with-dividers"}>
						<thead>
						<tr>
							<th>Resource</th>
							<th>Exchange rate</th>
						</tr>
						</thead>
						<tbody className={"divide-y"}>
						<tr>
							<td>{props.selectedResource?.resource.name ?? "[ Choose resource ]"}</td>
							<td>123</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
