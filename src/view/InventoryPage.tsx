import {Box, Card, Grid} from "@material-ui/core"
import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import {useObserver} from "mobx-react-lite"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"
import BuildingComponent from "component/resource/BuildingComponent"
import {MONEY, RESOURCE} from "constant/Constants"
import {Building} from "interfaces"

export default function InventoryPage() {

	const playerStore = useContext(playerContext)

	const onClickEvent = (name: string) => {
		playerStore.incrementOwnedResourceAmount(name)
	}

	const testingBuilding: Building = {
		name: "Lumbermill",
		costToUpgrade: [{
			resource: RESOURCE.iron,
			amount: 120,
		}, {
			resource: RESOURCE.wood,
			amount: 50,
		}
		],
		image: "https://static.wikia.nocookie.net/charmfarm/images/0/0c/LargeLumberMillG.jpg",
		level: 1,
		produces: [
			{
				resource: RESOURCE.wood,
				amount: 2,
			}
		],
		maintenanceFee: [{
			resource: MONEY.gold,
			amount: 12
		}],
		revenue: [{
			resource: MONEY.gold,
			amount: 20
		}]
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

			<Grid container spacing={2}>
				{
					["Lumber mill camp", "Lumbermill"].map((name) => {
						const modifiedBuild = {...testingBuilding, name: name}
						return (
							<Grid item key={name} xs={12} sm={12} md={12} lg={6}>
								<BuildingComponent building={modifiedBuild}/>
							</Grid>
						)
					})
				}

			</Grid>
		</>
	)
}
