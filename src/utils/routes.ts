import { Join } from "../types";

type ParseParams<K, Result> =
	K extends `${string}:${infer String}/${infer Tail}`
		? ParseParams<
				Tail,
				Result & {
					[key in String]: string
				}
		  >
		: K extends `${string}:${infer String}`
		? ParseParams<
				'',
				Result & {
					[key in String]: string
				}
		  >
		: { [K in keyof Result]: string }

type ExtractParams<K> = ParseParams<K, {}>
type Tree = { path: string; children?: Tree[] }

type MapHeadToStackFrame<A extends Tree[], Prefix extends string> = {
	[K in keyof A]: { prefix: Prefix; frame: A[K] }
}

type StackFrame = {
	frame: Tree
	prefix: string
}

type Prefix<Head extends StackFrame> = [Head['prefix'], Head['frame']['path']]

const slashJoin = (a: string, b: string): string => {
	if (a[a.length - 1] !== '/' && b[0] !== '/') return `${a}/${b}` as any
	return (a + b).replace(/\/{2,}/, '/') as any
}
