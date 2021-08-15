import {Box, Card} from "@material-ui/core"
import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import "css.css"
import {useObserver} from "mobx-react-lite"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import ResourceProducerBox from "component/resource/ResourceProducerBox"
import {RESOURCE} from "constant/Constants"

export default function InventoryPage() {

	const playerStore = useContext(playerContext)

	const onClickEvent = (name: string) => {
		playerStore.incrementOwnedResourceAmount(name)
	}

	return useObserver(() =>
		<>
			<MoneyCardComponent money={playerStore.money}/>
			<Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} style={{margin: 40, gap: 10}}>
				{
					playerStore.ownedResources.map(holder => (
							<Card key={holder.resource.name} className={"hoverable"} onClick={() => onClickEvent(holder.resource.name)}>
								<ResourceBox resourceHolder={holder}/>
							</Card>
						)
					)
				}
			</Box>
			<Box sx={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}} style={{margin: 40, gap: 10}}>
				<ResourceProducerBox resourceProducer={{
					name: "Lumbermill",
					costToUpgrade: [{
						resource: RESOURCE.iron,
						amount: 120,
						gainPerTick: 0
					}, {
						resource: RESOURCE.wood,
						amount: 50,
						gainPerTick: 0
					}
					],
					image: "Lumbermill image",
					level: 1,
					produces: [
						{
							resource: RESOURCE.wood,
							amount: 2,
							gainPerTick: 0
						}
					],
					maintenanceFee: 13,
					revenue: 20
				}}/>

				<ResourceProducerBox resourceProducer={{
					name: "Lumbermill",
					costToUpgrade: [{
						resource: RESOURCE.iron,
						amount: 120,
						gainPerTick: 0
					}, {
						resource: RESOURCE.wood,
						amount: 50,
						gainPerTick: 0
					}
					],
					image: "Lumbermill image",
					level: 1,
					produces: [
						{
							resource: RESOURCE.wood,
							amount: 2,
							gainPerTick: 0
						}
					],
					maintenanceFee: 13,
					revenue: 20
				}}/>
			</Box>

		</>
	)
}
