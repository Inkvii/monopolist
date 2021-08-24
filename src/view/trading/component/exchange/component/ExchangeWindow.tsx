import {useObserver} from "mobx-react-lite"
import balanceIcon from "assets/icons/balance.svg"
import {MONEY} from "constant/Constants"
import ResourceContext from "context/ResourceContext"

interface Props {
	selectedResource?: ResourceContext
}

export default function ExchangeWindow(props: Props) {

	return useObserver(() =>
		<div className={"flex flex-row md:p-8 md:m-16 sm:p-4 sm:m-4 justify-center bg-gray-300 items-center rounded-2xl"}>
			<div className={"md:w-40 md:h-40 sm:w-20 sm:h-20 bg-gray-200 mx-8 border-gray-500 border-4 shadow-inner rounded-2xl"}>
				<img src={props.selectedResource?.resource.icon} alt={""}/>
			</div>
			<div className={"flex flex-row items-center"}>
				<div className={"md:w-40 md:h-40 sm:w-20 sm:h-20 flex flex-col justify-center items-center "}>
					<img src={balanceIcon} color={"black"} className={"opacity-10"} alt={""}/>
				</div>
			</div>
			<div className={"md:w-40 md:h-40 sm:w-20 sm:h-20 bg-gray-200 mx-8 border-gray-500 border-4 shadow-inner rounded-2xl"}>
				<img src={MONEY.gold.icon} alt={""}/>
			</div>
		</div>
	)
}
