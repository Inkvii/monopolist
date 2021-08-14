import ShopView from "view/ShopView"
import EmptyPage from "view/EmptyPage"

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
	"shopView": new Route("/", "Shop view", ShopView),
	"emptyPage": new Route("/empty", "Empty page", EmptyPage)
}
