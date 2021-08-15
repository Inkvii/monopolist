import {Box, Card} from "@material-ui/core"
import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import "css.css"
import {useObserver} from "mobx-react-lite"
import {useContext} from "react"
import {playerContext} from "context/PlayerStore"

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
		</>
	)
}
