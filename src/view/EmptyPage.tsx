import {Box, Card, CardContent, Typography} from "@material-ui/core"

export default function EmptyPage() {
	return (
		<Box display={"flex"} justifyContent={"center"} style={{marginTop: "25vh"}}>
			<Card>
				<CardContent>
					<Typography variant={"h3"} style={{padding: 20}}>
						This is just an empty page
					</Typography>
				</CardContent>
			</Card>

		</Box>
	)
}
