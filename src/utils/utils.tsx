import { useHighlight } from "@chakra-ui/react"
import React from "react"

export const openExternalUrl = (url: string) => window.open(url, "_blank")

export const format = (template: string, ...params: string[]) =>
	params.reduce((acc, cur, i) => {
		return acc.replaceAll(`{${i}}`, cur)
	}, template)

export const HighlightComponent: React.FC<{
	template: string
	components: ((key: string) => any)[]
	query: string[]
}> = ({ components, query, template }) => {
    const componentCountRef = React.useRef(0)
	const chunks = useHighlight({
		query: query,
		text: template,
	})
	return (
		<>
			{chunks.map((chunk, i) => {
				if (chunk.match) {
					return components[componentCountRef.current++](chunk.text)
				}
				return chunk.text
			})}
		</>
	)
}
