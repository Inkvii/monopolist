import {useObserver} from "mobx-react-lite"
import ResourceContext from "context/ResourceContext"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangeRates(props: Props) {

	return useObserver(() =>
		<div className={"flex flex-col self-center w-1/2"}>
			<div className={"flex shadow overflow-hidden border-b border-gray-200 rounded-lg px-4 py-2 my-2 justify-center"}>
				<table className={"table-with-dividers table-fixed w-full"}>
					<thead>
					<tr>
						<th className={"w-8/12"}>Resource</th>
						<th className={"w-4/12"}>Exchange rate</th>
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
	)
}
