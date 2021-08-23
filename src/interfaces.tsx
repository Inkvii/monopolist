import Resource from "constant/Constants"

export interface BuildingResource {
	resource: Resource
	amount: number
}

export interface ManualClickableResource {
	readonly manualRequiredClicks: number
}
