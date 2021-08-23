import {useObserver} from "mobx-react-lite"
import {renderResources} from "service/ResourceService"
import Building from "context/Building"

interface Props {
	building: Building,
	className?: string
}

export default function BuildingResourceTable(props: Props) {

	return useObserver(() =>
		<table className={props?.className}>
			<thead/>
			<tbody className={"divide-y"}>
			<tr>
				<td>Produces</td>
				<td>{renderResources(props.building.produces)}</td>
			</tr>
			<tr>
				<td>Consumes</td>
				<td>{renderResources(props.building.consumes)}</td>
			</tr>
			<tr>
				<td>Cost to upgrade</td>
				<td>{renderResources(props.building.costToUpgrade)}</td>
			</tr>
			</tbody>
		</table>
	)
}
