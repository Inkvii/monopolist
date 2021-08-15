import InventoryPage from "view/InventoryPage"
import EmptyPage from "view/EmptyPage"
import React from "react"

export default class Route {
	path: string
	menuLabel: string
	component: React.FunctionComponent

	constructor(path: string, menuLabel: string, component: React.FunctionComponent) {
		this.path = path
		this.menuLabel = menuLabel
		this.component = component
	}
}

export const ROUTES = {
	inventoryPage: new Route("/", "Inventory page", InventoryPage),
	emptyPage: new Route("/empty", "Empty page", EmptyPage)
}
