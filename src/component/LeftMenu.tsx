import {List, ListItem, ListItemText} from "@material-ui/core"
import React from "react"
import Route, {ROUTES} from "router/Routes"
import {useHistory} from "react-router-dom"

interface Props {
	currentLocation: string
}

export default function LeftMenu(props: Props) {
	const history = useHistory()

	const normalStyle = {backgroundColor: "#f6f6f6"}
	const activeStyle = {backgroundColor: "rgba(5,128,255,0.22)"}

	return (
		<List style={{...normalStyle, paddingTop: 0}}>
			{
				Object.values(ROUTES).map((route: Route, index) => {
					const chosenStyle = route.path === props.currentLocation ? activeStyle : normalStyle
					return (
						<ListItem button key={route.path} style={chosenStyle} onClick={() => history.push(route.path)}>
							<ListItemText primary={route.menuLabel}/>
						</ListItem>
					)
				})
			}
		</List>
	)
}
