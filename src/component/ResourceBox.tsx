import {Grid, Typography} from "@material-ui/core"
import {ResourceHolder} from "interfaces"

interface Props {
	resourceHolder: ResourceHolder
}

export default function ResourceBox(props: Props) {

	return (
		<Grid container style={{padding: 10}}>
			<Grid container item xs={4} alignContent={"center"}>
				<img src={props.resourceHolder.resource.icon} height={32} alt={"pic placeholder"}/>
			</Grid>
			<Grid container item xs={8}>
				<Grid item xs={12}>
					<Typography variant={"subtitle1"}>{props.resourceHolder.resource.name}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant={"body2"}>{Math.floor(props.resourceHolder.amount)}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant={"body2"}>(+{props.resourceHolder.gainPerTick}/min)</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}
