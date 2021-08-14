import {Box, Card} from "@material-ui/core"
import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import {RESOURCE} from "constant/Constants"
import {Player} from "interfaces"

export default function ShopView() {

	const player: Player = {
		money: 123,
		ownedResources: [{
			resource: RESOURCE.wood,
			gainPerTick: 1.25,
			amount: 10
		}, {
			resource: RESOURCE.iron,
			gainPerTick: 12.25,
			amount: 56
		}
		]
	}

	return (
		<>
			<MoneyCardComponent money={10254}/>

			<Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} style={{margin: 40, gap: 10}}>

				{
					player.ownedResources.map(holder => (
							<Card key={holder.resource.name}>
								<ResourceBox resourceHolder={holder}/>
							</Card>
						)
					)
				}
			</Box>
		</>
	)
}
