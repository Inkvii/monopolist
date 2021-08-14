import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core"

interface Props {
	money: number
}

export default function MoneyCardComponent(props: Props) {

	const formatMoney = () => {
		return Intl.NumberFormat("en-US", {style: "currency", currency: "EUR"}).format(props.money)
	}

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
								<Typography variant={"h3"}>
									{formatMoney()}
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Box>
		</Box>
	)
}
