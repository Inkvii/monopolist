import React from 'react'
import {Route, Switch, useLocation} from "react-router-dom"
import {Grid} from "@material-ui/core"
import LeftMenu from "component/LeftMenu"
import {ROUTES} from "router/Routes"
import {RecoilRoot} from "recoil"

function App() {

	const location = useLocation()

	return (

		<Grid container>
			<Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
				<LeftMenu currentLocation={location.pathname}/>
			</Grid>

			<Grid item xs={12} sm={12} md={9} lg={10} xl={10}>
				<RecoilRoot>
					<Switch>
						<Route exact path={ROUTES.inventoryPage.path} component={ROUTES.inventoryPage.component}/>
						<Route exact path={ROUTES.emptyPage.path} component={ROUTES.emptyPage.component}/>
					</Switch>
				</RecoilRoot>
			</Grid>
		</Grid>
	)
}

export default App
