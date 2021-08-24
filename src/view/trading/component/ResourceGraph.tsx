import {useObserver} from "mobx-react-lite"

interface Props {

}

export default function ResourceGraph(props: Props) {

	return useObserver(() =>
		<div>Big graph</div>
	)
}
