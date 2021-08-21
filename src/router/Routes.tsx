import InventoryPage from "view/inventory/InventoryPage"
import EmptyPage from "view/EmptyPage"
import React from "react"
import BuildingDetail from "view/building/detail/BuildingDetailPage"
import BuildingsListPage from "view/building/list/BuildingsListPage"

type PathVariable = {
	key: string,
	value: string
}


export default class Route {
	path: string
	menuLabel: string
	component: React.FunctionComponent
	isHiddenFromMenu: boolean

	constructor(path: string, menuLabel: string, component: React.FunctionComponent, isHiddenFromMenu: boolean = false) {
		this.path = path
		this.menuLabel = menuLabel
		this.component = component
		this.isHiddenFromMenu = isHiddenFromMenu
	}

	computeUrl(pathVariables: PathVariable[]): string {

		let newPath = this.path
		pathVariables.forEach(variable => newPath = newPath.replace(variable.key, variable.value))

		return newPath
	}
}

export const ROUTES = {
	inventoryPage: new Route("/", "Inventory page", InventoryPage),
	emptyPage: new Route("/empty", "Empty page", EmptyPage),
	resourceProducerDetail: new Route("/resource/:name/detail", "Resource detail", BuildingDetail, true),
	buildingsPage: new Route("/buildings/list", "Buildings menu", BuildingsListPage)
}
