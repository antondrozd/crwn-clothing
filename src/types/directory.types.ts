export type DirectoryStateType = {
	sections: SectionType[]
}

export type SectionType = {
	title: string
	imageUrl: string
	size?: string
	id: number
	linkUrl: string
}
