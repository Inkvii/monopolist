import {useHistory, useParams} from "react-router-dom"

interface ParamTypes {
	name: string
}

export default function BuildingDetailPage() {
	const {name} = useParams<ParamTypes>()

	const history = useHistory()

	const goBack = () => {
		history.goBack()
	}

	return (
		<div>
			{name}

			<div>
				<button className={"bg-green-900 text-white py-2 w-auto text-lg px-6 m-2"} onClick={() => goBack()}>Go back</button>
			</div>
		</div>
	)
}
