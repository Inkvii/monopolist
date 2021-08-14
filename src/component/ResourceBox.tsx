import {Grid, Typography} from "@material-ui/core"

export default function ResourceBox() {
	return (
		<Grid container style={{padding: 10}}>
			<Grid container item xs={4} alignContent={"center"}>
				<img src={"resources/iron.PNG"} height={32}/>
			</Grid>
			<Grid container item xs={8}>

				<Grid item xs={12}>
					<Typography variant={"subtitle1"}>Iron</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant={"body2"}>10</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant={"body2"}>(+2.41/min)</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}
