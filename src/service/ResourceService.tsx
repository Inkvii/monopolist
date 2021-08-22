import {BuildingResource} from "interfaces"

export const renderResources = (resources: BuildingResource[] | undefined) => {
	if (!resources) {
		return
	}

	return (
		<div className={"flex flex-row pl-2 items-center justify-center"}>
			{
				resources?.map(res => (
					<div key={res.resource.name} className={"flex flex-row items-center justify-center mx-2"}>
						<img src={res.resource.icon} alt={"my resource"} className={"w-8"}/>
						<p className={"mx-1.5"}>{res.amount}</p>
					</div>
				))
			}
		</div>
	)
}

export function hasEnoughOfResources(store: BuildingResource[], target: BuildingResource[]): boolean {
	for (const resource of target) {
		const resInStore: BuildingResource | undefined = store.find(res => res.resource === resource.resource)
		if (!resInStore) {
			return false
		}

		if (resInStore.amount < resource.amount) {
			return false
		}
	}

	return true
}
