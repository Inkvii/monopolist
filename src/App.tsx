import React from 'react'
import {Route, Switch, useLocation} from "react-router-dom"
import {Grid} from "@material-ui/core"
import LeftMenu from "component/LeftMenu"
import {ROUTES} from "router/Routes"

function App() {

	const location = useLocation()

	return (

		<Grid container>
			<Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
				<LeftMenu currentLocation={location.pathname}/>
			</Grid>

			<Grid item xs={12} sm={12} md={9} lg={10} xl={10}>
				<Switch>
					<Route exact path={ROUTES.shopView.path} component={ROUTES.shopView.component}/>
					<Route exact path={ROUTES.emptyPage.path} component={ROUTES.emptyPage.component}/>
				</Switch>
			</Grid>
		</Grid>
	)
}

export default App
