import {Box, Card} from "@material-ui/core"
import ResourceBox from "component/ResourceBox"
import MoneyCardComponent from "component/MoneyCardComponent"
import {PlayerContext} from "context/PlayerContext"
import "css.css"
import {useRecoilState} from "recoil"

export default function ShopView() {

	const [player, setPlayer] = useRecoilState(PlayerContext)

	const onClickEvent = (name: string) => {

		const holders = player.ownedResources.map(value => {
			const amount = value.resource.name === name ? value.amount + 1 : value.amount
			return {...value, amount: amount}
		})
		const newPlayer = {...player, ownedResources: holders}

		setPlayer(newPlayer)
	}

	return (
		<>
			<MoneyCardComponent money={player.money}/>

			<Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}} style={{margin: 40, gap: 10}}>

				{
					player.ownedResources.map(holder => (
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
