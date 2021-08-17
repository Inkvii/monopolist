import {useParams} from "react-router-dom"

interface ParamTypes {
	name: string
}

export default function BuildingDetailPage() {
	const {name} = useParams<ParamTypes>()


	return (
		<div>
			{name}
		</div>
	)
}
