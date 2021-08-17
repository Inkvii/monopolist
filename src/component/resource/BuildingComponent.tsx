import {Box, Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core"
import {Building, ResourceHolder} from "interfaces"
import {useHistory} from "react-router-dom"
import {ROUTES} from "router/Routes"

interface Props {
	building: Building
}

export default function BuildingComponent(props: Props) {

	const history = useHistory()

	const upgradeButtonOnClick = () => {
		history.push(ROUTES.resourceProducerDetail.computeUrl([{key: ":name", value: props.building.name}]))
	}

	const renderResources = (labelName: string, resources: ResourceHolder[] | undefined) => {
		return (
			<TableRow>
				<TableCell>{labelName}</TableCell>
				<TableCell>
					<Box display={"flex"}>

						{
							resources?.map(res => (
								<Box key={res.resource.name} display={"flex"} alignItems={"center"} style={{paddingLeft: 10}}>
									<img src={res.resource.icon} height={32} alt={"resource picture"}/>
									<p>{res.amount}</p>
								</Box>
							))
						}
					</Box>
				</TableCell>
			</TableRow>
		)

	}

	return (

		<Card style={{margin: 20}}>
			<CardContent>

				<Grid container spacing={2}>
					<Grid item xs={4} style={{minHeight: 200}}>
						<img src={props.building.image} style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							verticalAlign: "middle",

							maxHeight: "128",
							width: "100%",
							border: "3px solid black"
						}} alt={"picture"}/>

					</Grid>
					<Grid item xs={8}>
						<TableContainer>

							<Table size={"small"}>
								<TableBody>

									<TableRow>
										<TableCell>Name</TableCell>
										<TableCell>{props.building.name}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Level</TableCell>
										<TableCell>{props.building.level}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Maintenance fee</TableCell>
										<TableCell>{props.building.maintenanceFee}</TableCell>
									</TableRow>
									{renderResources("Cost to upgrade: ", props.building.costToUpgrade)}
									<TableRow>
										<TableCell>Revenue</TableCell>
										<TableCell>{props.building.revenue}</TableCell>
									</TableRow>
									{renderResources("Produces: ", props.building.produces)}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>

					<Grid container item xs={12} spacing={2}>
						<Grid item xs={6}>
							<Button variant={"contained"} color={"primary"} fullWidth>Level up</Button>
						</Grid>
						<Grid item xs={6}>
							<Button variant={"contained"} color={"secondary"} fullWidth onClick={() => upgradeButtonOnClick()}>Upgrade options</Button>
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
