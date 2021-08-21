import {BuildingResource} from "interfaces"

export const renderResources = (resources: BuildingResource[] | undefined) => {
	if (!resources) {
		return
	}

	return (
		<div className={"flex flex-row pl-2 items-center justify-center"}>
			{
				resources?.map(res => (
					<div key={res.resource.name} className={"flex flex-row items-center justify-center"}>
						<img src={res.resource.icon} alt={"my resource"} className={"w-8"}/>
						<p className={"mx-1"}>{res.amount}</p>
					</div>
				))
			}
		</div>
	)
}
