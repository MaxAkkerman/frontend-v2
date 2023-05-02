import React from "react"
import { Button, ButtonProps, Spinner } from "@chakra-ui/react"
import { Text } from "@/components/Text/Text"

export type BaseButtonProps = Omit<ButtonProps, "size"> & {
	size?: TextSize
}

type TextSize = "xl" | "lg" | "m" | "s" | "sm" | "xs"
const sizes: Record<TextSize, string> = {
	xl: "64px",
	lg: "56px",
	m: "48px",
	s: "40px",
	sm: "32px",
	xs: "28px",
}
export const BaseButton: React.FCC<BaseButtonProps> = ({
	children,
	size = "m",
	...props
}) => {
	const TextComp = <Text size="promo-14">{children}</Text>
	const styles = React.useMemo(
		() => ({
			height: sizes[size],
			width: "100%",
			borderRadius: "8px",
		}),
		[size]
	)
	return (
		<Button
			opacity={1}
			style={styles}
			spinner={
				<Spinner
					thickness="2px"
					emptyColor="#515460"
					color="#C74A26"
					speed="1s"
				/>
			}
			gap={1}
			//@ts-ignore
			loadingText={TextComp}
			{...props}
		>
			{TextComp}
		</Button>
	)
}
