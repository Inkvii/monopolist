import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core"

interface Props {
	money: number
}

export default function MoneyCardComponent(props: Props) {

	return (
		<Box display={"flex"}>
			<Box display={"flex"} flexGrow={1} justifyContent={"center"} alignItems={"center"}>
				<Card>
					<CardContent>
						<Grid container>
							<Grid item xs={12}>
								Card name that can be longer
							</Grid>
							<Grid container item xs={12} justifyContent={"center"}>
								<img src={"resources/gold.PNG"} style={{height: 50, paddingRight: 10}} alt={"resource"}/>
								<Typography variant={"h3"}>
									{props.money}
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Box>
		</Box>
	)
}
