import {
	ControlContainer,
	InputName,
	InputNote,
} from "@/components/CreateOffer/CreateOfferSelection/CreateOfferSelectonFirst"
import { CurrencyPanel } from "@/components/CurrencyPanel/CurrencyPanel"
import { InputRedText } from "@/components/Input/redText"
import React from "react"

type CreateBidInputTokenProps = {
	title: string
	titleTooltip: string
	bottomText: string
	currencyIcon: string
	currencyName: string
}

export const CreateBidInputToken: React.FC<CreateBidInputTokenProps> = (
	props
) => {
	return (
		<ControlContainer
			titleLeft={
				<InputName
					text={props.title}
					tooltipText={props.titleTooltip}
					tooltipSize={"s"}
				/>
			}
			bottomLeft={<InputNote text={props.bottomText} />}
		>
			<CurrencyPanel
				icon={props.currencyIcon}
				name={props.currencyName}
				rightComponent={
					<InputRedText onClick={() => {}} text="address" />
				}
			/>
		</ControlContainer>
	)
}
