import BuildingListItem from "view/building/list/component/BuildingListItem"
import {BUILDINGS} from "constant/Constants"

export default function BuildingListPage() {

	return (
		<div className={"flex justify-center"}>

			{/*<div>*/}
			<div className={"flex flex-col justify-center self-center"}>
				{Object.values(BUILDINGS).map(building => <BuildingListItem key={building.name} building={building}/>)}
			</div>
			{/*</div>*/}
		</div>
	)
}
