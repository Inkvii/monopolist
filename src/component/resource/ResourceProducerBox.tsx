import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core"
import {ResourceProducer} from "interfaces"

interface Props {
	resourceProducer: ResourceProducer
}

export default function ResourceProducerBox(props: Props) {
	return (

		<Card style={{margin: 20}}>
			<CardContent>

				<Grid container spacing={2}>
					<Grid item xs={4} style={{minHeight: 200}}>
						<div style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							verticalAlign: "middle",
							width: "100%",
							height: "100%",
							border: "3px solid black"
						}}><p style={{}}>{props.resourceProducer.image}</p></div>

					</Grid>
					<Grid item xs={8}>

						<Typography variant={"h6"}>Name: {props.resourceProducer.name}</Typography>
						<Typography variant={"body1"}>Level: {props.resourceProducer.level}</Typography>
						<Typography variant={"body1"}>Maintenance fee: {props.resourceProducer.maintenanceFee}</Typography>
						<Typography variant={"body1"}>Cost to
							upgrade: {props.resourceProducer.costToUpgrade.map(res => res.resource.name + ": " + res.amount).join(", ")}</Typography>
						<Typography variant={"body1"}>Revenue: {props.resourceProducer.revenue}</Typography>
						<Typography
							variant={"body1"}>Produces: {props.resourceProducer.produces?.map(res => res.resource.name + ": " + res.amount).join(", ")}</Typography>

					</Grid>

					<Grid container item xs={12} spacing={2}>
						<Grid item xs={6}>
							<Button variant={"contained"} color={"primary"} fullWidth>Level up</Button>
						</Grid>
						<Grid item xs={6}>
							<Button variant={"contained"} color={"secondary"} fullWidth>Upgrade options</Button>
						</Grid>
					</Grid>
				</Grid>


			</CardContent>
		</Card>

		// <Card style={{margin: 20}}>
		// 			<CardContent>
		// 	<Grid container spacing={2}>
		// 		<Grid item xs={12}>
		// 				<Grid item xs={2}>
		// 					<div style={{
		// 						// display: "flex",
		// 						alignItems: "center",
		// 						justifyContent: "center",
		// 						verticalAlign: "middle",
		// 						// height: "100%", width: "100%",
		// 						border: "3px solid black"
		// 					}}><p style={{}}>Placeholder</p></div>
		// 				</Grid>
		// 				<Grid item xs={10}>
		// 					<Grid item xs={6}>
		// 						<TextField variant={"outlined"} value={props.resourceProducer.name} />
		// 						<TextField variant={"outlined"} value={props.resourceProducer.name} />
		// 						<TextField variant={"outlined"} value={props.resourceProducer.name} />
		// 						<TextField variant={"outlined"} value={props.resourceProducer.name} />
		// 					</Grid>
		// 					{/*<Grid item xs={6}>*/}
		// 					{/*	<TextField variant={"outlined"} value={props.resourceProducer.level} />*/}
		// 					{/*	<TextField variant={"outlined"} value={props.resourceProducer.level} />*/}
		// 					{/*	<TextField variant={"outlined"} value={props.resourceProducer.level} />*/}
		// 					{/*	<TextField variant={"outlined"} value={props.resourceProducer.level} />*/}
		// 					{/*	<TextField variant={"outlined"} value={props.resourceProducer.level} />*/}
		//
		// 					{/*</Grid>*/}
		//
		// 				</Grid>
		// 		</Grid>
		// 	</Grid>
		// 			</CardContent>
		// </Card>
	)
}
