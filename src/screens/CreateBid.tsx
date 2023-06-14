import { CreateBidHydrator } from "@/components/CreateBid/CreateBidHydrator"
import { FromCurrToCurr } from "@/components/FromCurrToCurr/FromCurrToCurr"
import { InfoTooltip } from "@/components/InfoTooltip/InfoTooltip"
import { OfferTypeIndicator } from "@/components/OfferTypeIndicator/OfferTypeIndicator"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { PageWrapper } from "@/components/PageWrapper/PageWrapper"
import { WithTooltip } from "@/components/WithTooltip/WithTooltip"
import { Box, Flex } from "@chakra-ui/react"
import React from "react"

type CreateBidProps = {}

export const CreateBid: React.FC<CreateBidProps> = ({}) => {
	return (
		<PageWrapper
			header={
				<>
					<PageHeader
						subTitle={""}
						titleLeft={
							<FromCurrToCurr
								fromIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
								toIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
							/>
						}
						title={"Offer Details"}
						borderBottom
						titleRight={
							<Flex alignItems={"center"}>
								<OfferTypeIndicator type="dynamic" size="s" />
								<InfoTooltip
									size="s"
									infoText="All redeemed parts of offer are instantly sent to your wallet"
								/>
							</Flex>
						}
					>
						<Box overflow={"scroll"} w={"full"}>
							<Flex alignItems={"stretch"} w="full"></Flex>
						</Box>
					</PageHeader>
				</>
			}
		>
			<div className="max-w-[790px] mx-auto w-full pt-12 lg:pt-16">
				<CreateBidHydrator />
			</div>
		</PageWrapper>
	)
}
