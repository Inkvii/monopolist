import React, {useContext, useEffect} from 'react'
import {Route, Switch, useLocation} from "react-router-dom"
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

		playerStore.recalculateMoneyGains()
		playerStore.recalculateResourceGains()

		return (() => {
			workerTimers.clearInterval(heartbeat)
		})
		// eslint-disable-next-line
	}, [])

	return (
		<div className={"flex flex-col"}>
			<TopPanel/>
			<div className={"grid gap-10"} style={{gridTemplateColumns: "200px 4fr"}}>
				<div>
					<LeftMenu currentLocation={location.pathname}/>
				</div>
				<div>
					<Switch>
						<Route exact path={ROUTES.inventoryPage.path} component={ROUTES.inventoryPage.component}/>
						<Route exact path={ROUTES.emptyPage.path} component={ROUTES.emptyPage.component}/>
						<Route exact path={ROUTES.resourceProducerDetail.path} component={ROUTES.resourceProducerDetail.component}/>
					</Switch>
				</div>
			</div>

		</div>
	)
}

export default App
