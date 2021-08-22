import React, {useContext, useEffect} from 'react'
import {Route, Switch, useLocation} from "react-router-dom"
import LeftMenu from "component/LeftMenu"
import {ROUTES} from "router/Routes"
import * as workerTimers from "worker-timers"
import doStuff from "background/Heartbeat"
import TopPanel from "component/TopPanel"
import {context} from "context/GlobalContext"

function App() {

	const location = useLocation()

	const store = useContext(context)

	useEffect(() => {
		const heartbeat = workerTimers.setInterval(() => {
			// do something many times
			doStuff(store)

		}, 1000)

		store.resourceService.recalculateResourcesGainPerTick()

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
						{
							Object.values(ROUTES).map(route => <Route key={route.path} exact path={route.path} component={route.component}/>)
						}
					</Switch>
				</div>
			</div>

		</div>
	)
}

export default App
