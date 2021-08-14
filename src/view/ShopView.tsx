import {Box, Card} from "@material-ui/core"
import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"

export default function ShopView() {
	return (
		<>
			<MoneyCardComponent money={10254}/>

			<Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} style={{margin: 40, gap: 10}}>

				<Card>
					<ResourceBox/>
				</Card>
				<Card>
					<ResourceBox/>
				</Card>
				<Card>
					<ResourceBox/>
				</Card>
				<Card>
					<ResourceBox/>
				</Card>
				<Card>
					<ResourceBox/>
				</Card>
				<Card>
					<ResourceBox/>
				</Card>

			</Box>
		</>
	)
}
