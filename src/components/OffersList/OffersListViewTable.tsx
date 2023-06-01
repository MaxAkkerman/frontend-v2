import { OrangeButton } from "@/components/Button/OrangeButton"
import { CurrencyIcon } from "@/components/CurrencyIcon/CurrencyIcon"
import { DataGrid, DataGridCardDivider } from "@/components/DataGrid/DataGrid"
import { MyOfferIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import {
	SingleOfferColumnAcceptedTokens,
	SingleOfferColumnAmount,
	SingleOfferColumnBidsCount,
	SingleOfferColumnButton,
	SingleOfferColumnOfferId,
	SingleOfferViewProps,
} from "@/components/OffersList/SingleOfferView"
import { TableCardContainer } from "@/components/Table/Table"
import { LeadText, Text12Normal } from "@/components/Text/Typography"
import { LongEthValueView } from "@/components/TokenAmountInput/TokenAmountInput"
import { WBN } from "@/utils/WBN"
import { Box, Flex, HStack } from "@chakra-ui/react"
import React from "react"

export const SmallMyOfferLabel: React.FC = () => (
	<div style={{ transform: "scale(0.75)", display: "inline-block" }}>
		<MyOfferIndicator />
	</div>
)

type OffersListViewTableProps = {
	data: SingleOfferViewProps[]
}
export const OffersListViewTable: React.FC<OffersListViewTableProps> = ({
	data,
}) => {
	return (
		<DataGrid
			styles={{
				cell: {
					padding: "1rem 0",
				},
			}}
			renderers={{
				column: (name) => (
					<Text12Normal color={"#4c4c4c"}>{name}</Text12Normal>
				),
				card: (row, view) => (
					<TableCardContainer>
						<Flex direction={"column"} w={"full"}>
							<Flex direction={"column"} grow={1}>
								{[
									view.offerId,
									view.amountBob,
									view.tokensBob,
								].map((x) => (
									<HStack
										w={"100%"}
										justifyContent={"space-between"}
										alignItems={"start"}
									>
										<Text12Normal color={"gray"}>
											{x.name}
										</Text12Normal>
										<Box>{x.view}</Box>
									</HStack>
								))}
							</Flex>
							<HStack
								w={"100%"}
								justifyContent={"space-between"}
								alignItems={"start"}
							>
								<Text12Normal color={"gray"}>
									{"Bids: "}
								</Text12Normal>
								{view.bids.view}
							</HStack>
							<Flex></Flex>
							{view.viewOffer.view && (
								<>
									<DataGridCardDivider />
									<HStack>{view.viewOffer.view}</HStack>
								</>
							)}
						</Flex>
					</TableCardContainer>
				),
			}}
			rowKeyGetter={(x) => x.offerId}
			rows={data}
			columns={[
				{
					key: "offerId",
					name: "Offer Id",
					cellRender: (x) => <SingleOfferColumnOfferId {...x} />,
				},
				{
					key: "amountBob",
					name: "Amount",
					cellRender: (x) => <SingleOfferColumnAmount {...x} />,
				},
				{
					key: "tokensBob",
					name: "Accepted tokens",
					cellRender: (x) => (
						<SingleOfferColumnAcceptedTokens {...x} />
					),
				},
				{
					key: "bids",
					name: "",
					cellRender: (x) => (
						<SingleOfferColumnBidsCount {...x} variant="row" />
					),
					cardRender: (x) => (
						<SingleOfferColumnBidsCount {...x} variant="card" />
					),
				},
				{
					key: "viewOffer",
					name: "",
					cellRender: (row) => (
						<SingleOfferColumnButton {...row} variant="row" />
					),
					cardRender: (row) => {
						return (
							<SingleOfferColumnButton {...row} variant="card" />
						)
					},
				},
			]}
		/>
	)
}
