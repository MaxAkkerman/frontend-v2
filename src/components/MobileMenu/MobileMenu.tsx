import { MobileView } from "@/components/MobileView"
import { Box, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react"
import { Spin as Hamburger } from "hamburger-react"
import React from "react"

type MobileMenuProps = {}

export const MobileMenu: React.FCC<MobileMenuProps> = ({ children }) => {
	const [drawerVisible, setDrawerVisibility] = React.useState(false)
	const [active, setActive] = React.useState(false)
	return (
		<MobileView>
			<Box position={"relative"} zIndex="1500">
				<Hamburger
					color={active ? "white" : "white"}
					direction="right"
					toggled={active}
					onToggle={() => {
						setActive((t) => !t)
						setDrawerVisibility((t) => !t)
					}}
				/>
			</Box>
			<Drawer
				size={"full"}
				placement="left"
				isOpen={drawerVisible}
				onClose={() => {
					setDrawerVisibility(false)
					setActive(false)
				}}
			>
				<DrawerOverlay />
				<DrawerContent>{children}</DrawerContent>
			</Drawer>
		</MobileView>
	)
}
