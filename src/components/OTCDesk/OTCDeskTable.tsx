import React from 'react'
import {
	Table,
	TableRow,
	TableCard,
	TableSortButton,
} from '@/components/Table/Table'
import { Box, HStack, VStack } from '@chakra-ui/react'

type OTCDeskTableProps = {}

export const OTCDeskTable: React.FC<OTCDeskTableProps> = ({}) => {
	return (
		<Table
			header={[
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					From
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					To
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Offer mode
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Available size
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Discount
				</TableSortButton>,
				<TableSortButton
					onClick={() => {}}
					reversed={false}
					sorted={false}
				>
					Deadline
				</TableSortButton>,
			]}
			body={[
				<TableRow
					rowData={[1, 21232132132132121321, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 21232132132132121321,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
				<TableRow
					rowData={[1, 2, 3, 4, 5, 6, 7]}
					cardComponent={
						<TableCard
							data={[
								{ title: 'From', value: 1 },
								{
									title: 'To',
									value: 2,
								},
								{ title: 'Offer mode', value: 3 },
								{ title: 'Available size', value: 4 },
								{ title: 'Discount', value: 5 },
								{ title: 'Deadline', value: 6 },
								{ title: 'Deadline', value: 7 },
							]}
						/>
					}
				></TableRow>,
			]}
		></Table>
	)
}

type OTCOfferRowProps = {
	from: {
		title: string
		value: string
	}
	to: {
		title: string
		value: string
	}
	offerMode: {
		title: string
		value: string
	}
	availableSize: {
		title: string
		value: string
	}
	discount: {
		title: string
		value: string
	}
	deadline: {
		title: string
		value: string
	}
	button: React.ReactNode
}
const OTCOfferRow: React.FC<{ data: OTCOfferRowProps }> = ({ data }) => {
	return (
		<TableRow
			rowData={data.map((x) => x.value)}
			cardComponent={
				<VStack border="1px solid red">
					{data.map((x) => (
						<HStack w={'100%'} justifyContent={'space-between'}>
							<Box>{x.title}</Box>
							<Box>{x.value}</Box>
						</HStack>
					))}
				</VStack>
			}
		></TableRow>
	)
}
