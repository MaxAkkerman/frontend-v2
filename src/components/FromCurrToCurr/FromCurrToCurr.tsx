import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { Flex } from "@chakra-ui/react"
import React from "react"

type FromCurrToCurrProps = {
	fromIcon: string
	toIcon: string
}

export const FromCurrToCurr: React.FC<FromCurrToCurrProps> = (props) => {
	return (
		<Flex alignItems={"center"}>
			<CurrencyIcon imgSrc={props.fromIcon} />
			<CurrencyIcon imgSrc={props.toIcon} />
		</Flex>
	)
}
