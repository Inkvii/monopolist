import React, {useContext, useEffect} from 'react'
import {Route, Switch, useLocation} from "react-router-dom"
import {Grid} from "@material-ui/core"
import LeftMenu from "component/LeftMenu"
import {ROUTES} from "router/Routes"
import * as workerTimers from "worker-timers"
import doStuff from "background/Heartbeat"
import {playerContext} from "context/PlayerStore"
import TopPanel from "component/TopPanel"

function App() {

	const location = useLocation()

	const playerStore = useContext(playerContext)

	useEffect(() => {
		const heartbeat = workerTimers.setInterval(() => {
			// do something many times
			doStuff(playerStore)

		}, 1000)
		return (() => {
			workerTimers.clearInterval(heartbeat)
		})
		// eslint-disable-next-line
	}, [])

	return (
		<Grid container>
			<Grid item xs={12}>
				<TopPanel/>
			</Grid>
			<Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
				<LeftMenu currentLocation={location.pathname}/>
			</Grid>

			<Grid item xs={12} sm={12} md={9} lg={10} xl={10}>
				<Switch>
					<Route exact path={ROUTES.inventoryPage.path} component={ROUTES.inventoryPage.component}/>
					<Route exact path={ROUTES.emptyPage.path} component={ROUTES.emptyPage.component}/>
					<Route exact path={ROUTES.resourceProducerDetail.path} component={ROUTES.resourceProducerDetail.component}/>
				</Switch>
			</Grid>
		</Grid>

	)
}

export default App
