import {AppBar, IconButton, Toolbar} from "@material-ui/core"
import {Menu} from "@material-ui/icons"
import React from "react"

export default function TopPanel() {
	return (
		<AppBar variant={"outlined"} position={"static"} color={"primary"}>
			<Toolbar variant={"dense"}>
				<IconButton edge={"start"}>
					<Menu/>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
